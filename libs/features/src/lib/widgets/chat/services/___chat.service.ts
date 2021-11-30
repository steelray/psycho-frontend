import { ChangeDetectorRef, Injectable } from '@angular/core';
import { AuthService, ChatApiService, IClientConsultation, WSService, WS_COMMANDS } from '@psycho/core';
import { ChatWidgetModule } from '@psycho/features';
import { findBinary, WithDestroy } from '@psycho/utils';
import * as moment from 'moment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, switchMap, take, takeUntil } from 'rxjs/operators';
import { IChat, IChatMessage } from './chat.interface';
@Injectable({
  providedIn: 'any'
})
export class ChatService extends WithDestroy() {
  readonly userData$ = this.authService.userData$;
  readonly isLoading$ = new BehaviorSubject<boolean>(false);
  private readonly allMessages$ = new BehaviorSubject<IChatMessage[]>([]);
  // private readonly  _receiver$ ;
  messages: IChat[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly ws: WSService,
    private readonly chatApiService: ChatApiService
  ) {
    super();
    this.authService.userData$.pipe(
      filter(userData => !!userData),
      switchMap(userData => this.ws.afterOpen$.pipe(
        map(() => userData?.id)
      )),
      takeUntil(this.destroy$)
    ).subscribe(userId => {
      if (userId) {
        this.ws.sendMessage({
          command: WS_COMMANDS.REGISTER,
          user: userId,
        })
      }
    });


    this.ws.onMessage$.subscribe(message => console.log(message));
  }

  getConsultations$(receiverId: number, page = 0, status: 0 | 1 = 0): Observable<IClientConsultation[]> {
    return of([])
  }


  ngOnInit(): void {
    this.messages$.subscribe(messages => {
      this.cdRef.markForCheck();

      this.messages = [...messages];
    })
    // .subscribe(messages => this.allMessages$.next([...messages, ...this.allMessages$.getValue()]));
  }

  onLoadHistory(): void {
    this.isLoading$.next(true);

    setTimeout(() => {
      this.isLoading$.next(false);
    }, 1000);
  }

  onChatSubmit(message: string, userId: number): void {
    const currentMessages = this.allMessages$.getValue();
    currentMessages.push({
      message,
      created_at: new Date().getTime(),
      owner_id: userId,
      receiver_id: this.receiver.id,
      read: true,
    });
    this.ws.sendMessage({
      message,
      command: WS_COMMANDS.SEND_MESSAGE,
      user: userId,
      receiver: this.receiver.id
    });
    this.allMessages$.next(currentMessages);
  }

  onUserSwitch(id: number): void {
    this.receiver.id = id;
    this.allMessages$.next([]);
  }

  get messages$(): Observable<IChat[]> {
    return this.allMessages$.asObservable().pipe(
      switchMap(currentMessages => this.chatApiService.getMessages({
        receiver_id: this.receiver.id,
        page: 0,
        limit: 50
      }).pipe(
        map(newMessages => ([...currentMessages, ...newMessages])),
        take(1)
      )),
      map(messages => messages.sort((a, b) => a.created_at > b.created_at ? 1 : -1)),
      map(this.groupChatMessages)
    );
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

}