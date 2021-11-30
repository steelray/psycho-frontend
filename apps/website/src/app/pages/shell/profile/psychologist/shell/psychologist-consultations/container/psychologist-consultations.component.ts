import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IClientConsultation } from '@psycho/core';
import { PsychologistConsultationsFacade } from '../psychologist-consultations.facade';

@Component({
  selector: 'psycho-psychologist-consultations',
  templateUrl: './psychologist-consultations.component.html',
  styleUrls: ['./psychologist-consultations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PsychologistConsultationsFacade]
})
export class PsychologistConsultationsComponent {
  seletedConsultationId!: number;
  newConsultations$ = this.facade.newConsultations$;
  pastConsultations$ = this.facade.pastConsultations$;
  constructor(
    private readonly facade: PsychologistConsultationsFacade
  ) { }

  ngOnInit(): void {
  }

  onSelect(consultation: IClientConsultation): void {
    this.seletedConsultationId = consultation.id;
    this.facade.onConsultationSelect(consultation);
  }


}
