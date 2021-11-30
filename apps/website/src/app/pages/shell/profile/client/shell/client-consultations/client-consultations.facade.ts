import { Injectable } from '@angular/core';
import { ClientApiService, CONSULTATION_FORMAT, IClientConsultation } from '@psycho/core';
import { ChatService } from '@psycho/features';
import { WithDestroy } from '@psycho/utils';
import { Observable } from 'rxjs';

@Injectable()
export class ClientConsultationsFacade extends WithDestroy() {
  constructor(
    private readonly clientApiService: ClientApiService,
    private readonly chatService: ChatService
  ) {
    super();
  }

  get newConsultations$(): Observable<IClientConsultation[]> {
    return this.clientApiService.getConsultations({ status: 0, format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT });
  }
  get pastConsultations$(): Observable<IClientConsultation[]> {
    return this.clientApiService.getConsultations({ status: 1, format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT });
  }

  onConsultationSelect(consultation: IClientConsultation): void {
    this.chatService.setSelectedConsultation(consultation)
  }

}