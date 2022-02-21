import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Message } from '../model/message';
import { Event } from '../model/event';
import { io, Socket } from 'socket.io-client';
import { Action } from '../model/action';
import { tokenName } from '@angular/compiler';
import { ENVIRONMENTS, HttpErrorService, IEnvironment } from '@psycho/core';


// const SERVER_URL = 'http://zarland.ru/';
// const SERVER_URL = 'https://psychologycorp.ru/ws';
// const SERVER_URL = 'http://localhost:4000';

@Injectable({
    providedIn: 'root'
})
export class SocketService {
    private readonly _chatStarted$ = new Subject<number | null>();
    private readonly _chatEnded$ = new Subject<number | null>();
    private connectionInited = false;
    private readonly _messages$ = new BehaviorSubject<Message[]>([]);
    private socket: any;
    private readonly _onlineInterviewees$ = new BehaviorSubject<number[]>([]);

    constructor(
        private readonly httpErrorService: HttpErrorService,
        @Inject(ENVIRONMENTS) private env: IEnvironment
    ) { }


    get messages$(): Observable<Message[]> {
        return this._messages$.asObservable();
    }

    get onlineInterviewees$(): Observable<number[]> {
        return this._onlineInterviewees$.asObservable();
    }

    get chatStarted$(): Observable<number | null> {
        return this._chatStarted$.asObservable();
    }

    get chatEnded$(): Observable<number | null> {
        return this._chatEnded$.asObservable();
    }

    updateMessages(messages: Message[]): void {
        const currentMessages = this._messages$.getValue();
        this._messages$.next([...messages, ...currentMessages])
    }

    addMessage(message: Message): void {
        const currentMessages = this._messages$.getValue();
        currentMessages.push(message);
        this._messages$.next(currentMessages);
    }

    resetMessages(): void {
        this._messages$.next([]);
    }

    sendMessage(params: { message: string, receiver_id: number, consultation_id: number }): void {
        if (!params.message) {
            return;
        }

        this.send(
            Action.MESSAGE,
            {
                receiver_id: params.receiver_id,
                consultation_id: params.consultation_id,
                message: params.message
            }
        );
    }

    startChat(consultationId: number): void {
        this.send(Action.CHAT_START, { consultation_id: consultationId });
    }

    endChat(consultationId: number): void {
        this.send(Action.CHAT_END, { consultation_id: consultationId });
    }

    sendNotification(action: Action, consultation_id: number): void {
        let message: any;

        if (action === Action.ONLINE) {
            message = {
                consultation_id
            };
        }

        this.send(action, message);
    }

    initIoConnection(token: string): void {
        if (!this.connectionInited) {
            this.initSocket(token);

            this.onMessage()
                .subscribe((message: Message) => {
                    this.addMessage(message);
                });

            this.onEvent(Event.ONLINE)
                .subscribe(res => {
                    console.log('online', res);

                    const currentOnlines = this._onlineInterviewees$.getValue();
                    currentOnlines.push(+res);
                    this._onlineInterviewees$.next(currentOnlines);
                });

            this.onEvent(Event.OFFLINE)
                .subscribe(res => {
                    const currentOnlines = this._onlineInterviewees$.getValue().filter(id => id !== +res);
                    console.log(+res);
                    console.log(currentOnlines);
                    this._onlineInterviewees$.next(currentOnlines);
                });

            this.onEvent(Event.ONLINES)
                .subscribe(res => {
                    this._onlineInterviewees$.next(JSON.parse(res));
                });

            this.onEvent(Event.CHAT_STARTED)
                .subscribe(res => {
                    this._chatStarted$.next(+res);
                });

            this.onEvent(Event.CHAT_ENDED)
                .subscribe(res => {
                    this._chatEnded$.next(+res);
                });

            this.onEvent(Event.ERROR)
                .subscribe(res => {
                    this.httpErrorService.error$.next(res);
                });
        }
    }


    private initSocket(token: string): void {
        this.socket = io(this.env.wsEndpoint as string, {
            transports: ['websocket'],
            auth: {
                token
            }
        });
    }

    private send(action: Action, message: Message): void {
        this.socket.emit(action, message);
    }

    private onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    private onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, (data: any) => observer.next(data));
        });
    }
}
