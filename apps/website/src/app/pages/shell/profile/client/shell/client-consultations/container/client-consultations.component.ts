import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IClientConsultation } from '@psycho/core';
import { ClientConsultationsFacade } from '../client-consultations.facade';

@Component({
  selector: 'psycho-client-consultations',
  templateUrl: './client-consultations.component.html',
  styleUrls: ['./client-consultations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientConsultationsFacade]
})
export class ClientConsultationsComponent implements OnInit {
  seletedConsultationId!: number;
  newConsultations$ = this.facade.newConsultations$;
  pastConsultations$ = this.facade.pastConsultations$;
  constructor(
    private readonly facade: ClientConsultationsFacade
  ) { }

  ngOnInit(): void {
  }

  onSelect(consultation: IClientConsultation): void {
    this.seletedConsultationId = consultation.id;
    this.facade.onConsultationSelect(consultation);
  }

}
