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
  receiver?: number,
}

@Injectable({
  providedIn: 'root'
})
export class WSService {
  private socket$!: WebSocketSubject<any>;
  private readonly _message$ = new ReplaySubject();
  private readonly _error$ = new Subject();
  private readonly _opened$ = new Subject();
  private readonly _reconnect$ = new BehaviorSubject<null>(null);
  private connected = false;

  constructor(
    @Inject(ENVIRONMENTS) private readonly env: IEnvironment
  ) {
    if (!this.socket$) {
      this.socket$ = webSocket({
        url: this.env?.wsEndpoint || 'ws://localhost:8080',
        openObserver: this._opened$
      });
    } else if (this.socket$ && !this.connected) {
      this.connect();
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

  connect(): void {
    // prevent multiple connections
    if (!this.connected) {
      this._reconnect$.pipe(
        switchMap(() => this.socket$),
        finalize(() => this.connected = true)
      ).subscribe(
        message => this._message$.next(message),
        err => this._error$.next(err),
      )
    }
  }

  reconnect(): void {
    this._reconnect$.next(null);
  }

  onComplete(): void {
    this.socket$.complete();
  }

  sendMessage(message: IWSSendMessageParams): void {
    this.socket$.next(message);
  }



}