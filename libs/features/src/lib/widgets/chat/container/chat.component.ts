import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IUser, WindowService, WSService, WS_RESPONSE_TYPE } from '@psycho/core';
import { findBinary, WithDestroy } from '@psycho/utils';
import * as moment from 'moment';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { VideoChatDialogComponent } from '../components/video-chat-dialog/video-chat-dialog.component';
import { IChat, IChatMessage } from '../interfaces/chat.interface';
import { ChatService } from '../services/chat.service';
import { ZoomMtg } from '@zoomus/websdk';
import { DOCUMENT } from '@angular/common';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');
@Component({
  selector: 'psycho-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent extends WithDestroy() implements OnInit {
  @Input() includesVideoChat = false;
  consultation$ = this.chatService.selectedConsultation$;
  ownerId$ = this.chatService.ownerID$;
  isLoading = false;
  videoDialogIsOpened = false;

  private _messages$ = new BehaviorSubject<IChatMessage[]>([]);
  message!: string;

  private readonly limit = 50;
  private page$ = new BehaviorSubject<number>(0);

  // setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
  signatureEndpoint = 'http://psycho.loc/api/zoom/generate-token';
  apiKey = 'gNc_Vld8SPG0xyqUxA_6Xg'
  meetingNumber = '1'
  role = 0
  leaveUrl = 'http://localhost:4200'
  userName = 'Angular'
  userEmail = ''
  passWord = ''
  // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/meetings/join#join-registered
  // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/webinars/join#join-registered-webinar
  registrantToken = ''


  constructor(
    private readonly chatService: ChatService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly ws: WSService,
    private readonly dialog: MatDialog,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    super();
  }

  ngOnInit(): void {
    combineLatest([
      this.consultation$.pipe(
        filter(res => !!res),
        tap(() => this._messages$.next([])) // reset on consultation switch
      ),
      this.page$
    ]).pipe(
      map(([consultation, page]) => ({ consultation, page })),
      switchMap(res => this.chatService.getMessages(res.page, this.limit, res.consultation?.id as number)),
      takeUntil(this.destroy$)
    ).subscribe(messages => {
      this._messages$.next([...messages, ...this._messages$.getValue()]);
    })


    this.ws.onMessage$.pipe(
      map(message => JSON.parse(message)),
      filter(message => message.type === WS_RESPONSE_TYPE.MESSAGE),
      switchMap(message => this.consultation$.pipe(
        filter(consultation => message.consultation === consultation?.id),
        map(() => message)
      )),
      takeUntil(this.destroy$)
    ).subscribe(message => {
      this.pushMessageToCurrentList(message.message, message.owner as number)
    })
  }

  get receiver$(): Observable<IUser | undefined> {
    return this.consultation$.pipe(
      map(consultation => {
        if (consultation?.psychologist) {
          return consultation.psychologist;
        }
        return consultation?.client;
      })
    )
  }

  get messages$(): Observable<IChat[]> {
    return this._messages$.asObservable().pipe(
      map(this.groupChatMessages)
    );
  }


  onLoadHistory(): void {
    // TODO: load history
  }

  trackByFn(index: number): number {
    return index;
  }

  onSubmit(ownerId: number, consultationId: number): void {
    if (this.message) {
      this.pushMessageToCurrentList(this.message, ownerId);
      this.chatService.onMessageSend(this.message, ownerId, consultationId)
      this.message = '';
    }
  }

  async onVideoSwitch(): Promise<void> {
    this.videoDialogIsOpened = !this.videoDialogIsOpened;

    if (this.videoDialogIsOpened) {
      const signature = await this.chatService.getSignature().toPromise();
      this.startMeeting(signature);
    }

  }

  private startMeeting(signature: string) {
    const zoomRootEl = this.document.getElementById('zmmtg-root');
    console.log(zoomRootEl);

    if (zoomRootEl) {
      zoomRootEl.style.display = 'block'
      ZoomMtg.init({
        leaveUrl: this.leaveUrl,
        success: (success: any) => {
          console.log(success)
          ZoomMtg.join({
            signature,
            meetingNumber: this.meetingNumber,
            userName: this.userName,
            apiKey: this.apiKey,
            userEmail: this.userEmail,
            passWord: this.passWord,
            tk: this.registrantToken,
            success: (success: any) => {
              console.log(success)
            },
            error: (error: any) => {
              console.log(error)
            }
          })
        },
        error: (error: any) => {
          console.log(error)
        }
      })
    }

  }



  private groupChatMessages(messages: IChatMessage[]): IChat[] {
    const res: IChat[] = [];

    messages.forEach(message => {
      const messageDate: any = moment(message.created_at).format('YYYY.MM.DD');
      const existingGroup = findBinary(res, messageDate, 0, res.length, 'group_date');
      if (existingGroup) {
        existingGroup.messages.push(message);
      } else {
        res.push({
          group_date: messageDate,
          messages: [message]
        });
      }
    });

    return res;
  }


  private pushMessageToCurrentList(message: string, ownerId: number): void {
    console.log('pushing message');

    const currentMessages = this._messages$.getValue();
    currentMessages.push({
      message: message,
      created_at: new Date().getTime(),
      owner_id: ownerId,
      read: true
    })
    this._messages$.next(currentMessages);
  }

}
