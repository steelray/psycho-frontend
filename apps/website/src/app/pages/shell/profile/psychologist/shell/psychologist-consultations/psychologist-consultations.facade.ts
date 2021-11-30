import { Injectable } from '@angular/core';
import { CONSULTATION_FORMAT, IClientConsultation, PsychologistApiService } from '@psycho/core';
import { ChatService } from '@psycho/features';
import { WithDestroy } from '@psycho/utils';
import { Observable } from 'rxjs';

@Injectable()
export class PsychologistConsultationsFacade extends WithDestroy() {
  constructor(
    private readonly psychologistApiService: PsychologistApiService,
    private readonly chatService: ChatService
  ) {
    super();
  }

  get newConsultations$(): Observable<IClientConsultation[]> {
    return this.psychologistApiService.getClientsConsultations({ status: 0, format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT });
  }
  get pastConsultations$(): Observable<IClientConsultation[]> {
    return this.psychologistApiService.getClientsConsultations({ status: 1, format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT });
  }

  onConsultationSelect(consultation: IClientConsultation): void {
    this.chatService.setSelectedConsultation(consultation)
  }

}