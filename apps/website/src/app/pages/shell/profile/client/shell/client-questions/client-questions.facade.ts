import { Injectable } from '@angular/core';
import { ClientApiService, CONSULTATION_FORMAT, IClientConsultation } from '@psycho/core';
import { ChatService } from '@psycho/features';
import { Observable } from 'rxjs';

@Injectable()
export class ClientQuestionsFacade {
  constructor(
    private readonly clientApiService: ClientApiService,
    private readonly chatService: ChatService
  ) { }

  get newConsultations$(): Observable<IClientConsultation[]> {
    return this.clientApiService.getConsultations({ status: 0, format: CONSULTATION_FORMAT.FORMAT_EXPRESS });
  }
  get pastConsultations$(): Observable<IClientConsultation[]> {
    return this.clientApiService.getConsultations({ status: 1, format: CONSULTATION_FORMAT.FORMAT_EXPRESS });
  }

  onConsultationSelect(consultation: IClientConsultation): void {
    this.chatService.setSelectedConsultation(consultation)
  }
}