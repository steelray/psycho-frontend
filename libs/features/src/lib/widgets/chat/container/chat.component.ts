import { DOCUMENT } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, OnInit, AfterViewChecked, OnChanges, SimpleChanges, Inject, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService, ConsultationApiService, CONSULTATION_STATUS, CONSULTATION_USER_ROLE, IClientConsultation, IUser, WindowService, WSService, WS_RESPONSE_TYPE } from '@psycho/core';
import { findBinary, WithDestroy } from '@psycho/utils';
import * as moment from 'moment';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { IChat, IChatMessage } from '../interfaces/chat.interface';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'psycho-chat-old',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent extends WithDestroy() implements OnInit, OnChanges, AfterViewChecked {
  @Input() includesVideoChat = false;
  @Input() receiver!: IUser;
  @Input() consultation?: IClientConsultation;
  @Input() userRole!: CONSULTATION_USER_ROLE;
  @Input() showEndChatButton = false;
  @Output() startConsultation = new EventEmitter<boolean>();
  @Output() endConsultation = new EventEmitter<boolean>();
  readonly userData$ = this.authService.userData$;
  readonly statusEnum = CONSULTATION_STATUS
  readonly rolesEnum = CONSULTATION_USER_ROLE;

  isLoading = false;
  videoDialogIsOpened = false;

  private _messages$ = new BehaviorSubject<IChatMessage[]>([]);
  message!: string; // ngModel

  private readonly limit = 50;
  private page$ = new BehaviorSubject<number>(0);
  private receiver$ = new BehaviorSubject<IUser | null>(null);

  currentStatus!: CONSULTATION_STATUS;



  constructor(
    private readonly chatService: ChatService,
    private readonly authService: AuthService,
    private readonly consultationApiService: ConsultationApiService,
    private readonly ws: WSService,
    private windowService: WindowService,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly snackbar: MatSnackBar,
    private readonly cdRef: ChangeDetectorRef) {
    super();
  }

  get consultationId(): number {
    return this.consultation?.id as number;
  }

  ngAfterViewChecked(): void {
    if (this.currentStatus !== this.consultation?.status) {
      this.currentStatus = this.consultation?.status as CONSULTATION_STATUS;
      this.cdRef.detectChanges(); // mark for check(for start|end buttons)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes?.receiver?.currentValue?.id !== changes?.receiver?.previousValue?.id) {
      const receiver: any = changes.receiver.currentValue;
      this.receiver$.next(receiver);
      this._messages$.next([]);
    }
  }


  ngOnInit(): void {
    combineLatest([
      this.page$,
      this.receiver$
    ]).pipe(
      map(([page, receiver]) => ({ page, receiver })),
      filter(res => !!res?.receiver),
      tap(console.log),
      switchMap(res => this.chatService.getMessages(res.page, this.limit, res.receiver?.id as number)),
      takeUntil(this.destroy$)
    ).subscribe(messages => {
      this._messages$.next([...messages, ...this._messages$.getValue()]);
    })


    this.ws.onMessage$.pipe(
      map(message => JSON.parse(message)),
      filter(message => message.type === WS_RESPONSE_TYPE.MESSAGE),
      // switchMap(message => this.consultation$.pipe(
      //   filter(consultation => message.consultation === this.consultationId),
      //   map(() => message)
      // )),
      takeUntil(this.destroy$)
    ).subscribe((message: any) => {
      this.pushMessageToCurrentList(message.message, message.owner as number, message?.system_message)
    })
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

  onSubmit(ownerId: number): void {
    if (this.message) {
      this.pushMessageToCurrentList(this.message, ownerId);
      // this.chatService.onMessageSend(this.message, ownerId, this.consultationId as number)
      this.message = '';
    }
  }

  onConsultationStart(): void {
    this.startConsultation.emit(true);
  }

  onConsultationEnd(): void {
    this.endConsultation.emit(true);
  }

  onStartChat(): void {
    // TODO: start chat
  }

  async onVideoSwitch(): Promise<void> {
    this.videoDialogIsOpened = !this.videoDialogIsOpened;

    if (this.userRole === CONSULTATION_USER_ROLE.ROLE_CLIENT && this.consultation?.status === CONSULTATION_STATUS.WAITING) {
      this.snackbar.open('Консультация еще не началась.')
      return;
    }

    if (this.videoDialogIsOpened) {
      of('').pipe(
        switchMap(() => {
          if (this.consultation?.status === CONSULTATION_STATUS.WAITING) {
            this.onConsultationStart();
            // return this.consultationApiService.startConsultation(this.consultationId);
          }
          return of(true);
        }),
        filter(res => !!res),
        switchMap(() => {
          if (this.userRole === CONSULTATION_USER_ROLE.ROLE_CLIENT) {
            return this.chatService.joinMeeting(this.consultationId as number);
          }
          return this.chatService.startMeeting(this.consultationId as number);
        })
      ).subscribe((data: any) => {
        this.handleGenrateSignature(data.signature, { meetingNumber: data.id, userEmail: '', userName: data.username, passWord: data.password, apiKey: data.api_key });
      });
    }

  }


  private handleGenrateSignature(signature: string, formValues: any) {
    let meetingPayloads: any = {
      meetingNumber: formValues.meetingNumber,
      passWord: formValues.passWord,
      signature: signature,
      userEmail: formValues.userEmail,
      userName: formValues.userName,
      apiKey: formValues.apiKey
    };
    this.chatService.initializeWebSDK(meetingPayloads);
    this.document.getElementById('zmmtg-root')!.style.display = 'block'
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


  private pushMessageToCurrentList(message: string, ownerId: number, system_message = 0): void {

    const currentMessages = this._messages$.getValue();
    currentMessages.push({
      message: message,
      created_at: new Date().getTime(),
      owner_id: ownerId,
      read: true,
      system_message
    })
    this._messages$.next(currentMessages);
  }

}
