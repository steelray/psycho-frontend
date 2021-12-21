import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENTS, IEnvironment } from '@psycho/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export enum WS_RESPONSE_TYPE {
  CLOSED = 'closed',
  REGISTERED = 'registered',
  MESSAGE = 'message',
  ONLINE_PSYCHOLOGISTS = 'online-psychologists',
  ONLINE_INTERVIEWEES = 'online-interviewees',
  ERROR = 'error',
}

export enum WS_COMMANDS {
  REGISTER = 'register',
  SEND_MESSAGE = 'send-message',
  GET_ONLINE_PSYCHOLOGISTS = 'get-online-psychologists'
}

export interface IWSMessage {
  type: WS_RESPONSE_TYPE,
  message: any
}

export interface IWSSendMessageParams {
  user: number,
  command: WS_COMMANDS
  message?: string,
  consultation?: number,
}

@Injectable({
  providedIn: 'root'
})
export class WSService {
  private readonly _message$ = new ReplaySubject();
  private readonly _error$ = new Subject();
  private readonly _opened$ = new BehaviorSubject<boolean>(false);
  private readonly _reconnect$ = new BehaviorSubject<null>(null);


  private connection!: WebSocket;

  constructor(
    @Inject(ENVIRONMENTS) private readonly env: IEnvironment
  ) {
    if (!this.connection) {
      this.connection = new WebSocket(this.env.wsEndpoint as string);
    }

    this.connection.onopen = (e) => {
      this._opened$.next(true);
    };

    this.connection.onmessage = (e) => {
      this._message$.next(e.data);
    };
    this.connection.onclose = function (e) {
      console.log('ws closed');

      // onlineUsersDiv.innerHTML = e.data;
    }
  }

  get onMessage$(): Observable<any> {
    return this._message$.asObservable();
  }

  get onError$(): Observable<any> {
    return this._error$.asObservable();
  }

  get afterOpen$(): Observable<any> {
    return this._opened$.asObservable()
  }


  onComplete(): void {
    this.connection.close();
  }

  sendMessage(message: IWSSendMessageParams): void {
    if (message && this.connection) {
      this.connection.send(JSON.stringify(message as any));
    }
  }



}