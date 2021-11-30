import { Injectable } from '@angular/core';
import { AuthService, ChatApiService, IClientConsultation, IUser, WSService, WS_COMMANDS } from '@psycho/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IChatMessage } from '../interfaces/chat.interface';
@Injectable({
  providedIn: 'any'
})
export class ChatService {
  private readonly _selectedConsultation$ = new BehaviorSubject<IClientConsultation | null>(null);
  readonly ownerID$ = this.authService.userData$.pipe(
    filter(data => !!data),
    map(data => data?.id)
  );

  constructor(
    private readonly authService: AuthService,
    private readonly chatApiService: ChatApiService,
    private readonly ws: WSService
  ) {
  }

  getSignature(): Observable<string> {
    return this.chatApiService.getZoomSignature();
  }

  setSelectedConsultation(consultation: IClientConsultation): void {
    this._selectedConsultation$.next(consultation);
  }

  getMessages(page = 0, limit: 50, consultationId: number): Observable<IChatMessage[]> {
    return this.chatApiService.getMessages({
      id: consultationId,
      page,
      limit
    })
  }

  onMessageSend(message: string, ownerId: number, consultationId: number): void {
    this.ws.sendMessage({
      message,
      command: WS_COMMANDS.SEND_MESSAGE,
      user: ownerId,
      consultation: consultationId
    })
  }

  get selectedConsultation$(): Observable<IClientConsultation | null> {
    return this._selectedConsultation$.asObservable();
  }





}