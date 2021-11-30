import { Injectable } from '@angular/core';
import { CONSULTATION_FORMAT, IClientConsultation, IUser, PsychologistApiService } from '@psycho/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatService } from '@psycho/features';

@Injectable()
export class PsychologistQuestionsFacade {
  private _newConsultations$!: BehaviorSubject<IClientConsultation[]>;
  private _pastConsultations$!: BehaviorSubject<IClientConsultation[]>;
  constructor(
    private readonly psychologistApiService: PsychologistApiService,
    private readonly chatService: ChatService
  ) { }

  get newConsultations$(): Observable<IClientConsultation[]> {
    return this.psychologistApiService.getClientsConsultations({ status: 0, format: CONSULTATION_FORMAT.FORMAT_EXPRESS });
  }
  get pastConsultations$(): Observable<IClientConsultation[]> {
    return this.psychologistApiService.getClientsConsultations({ status: 1, format: CONSULTATION_FORMAT.FORMAT_EXPRESS });
  }

  onConsultationSelect(consultation: IClientConsultation): void {
    this.chatService.setSelectedConsultation(consultation)
  }

}