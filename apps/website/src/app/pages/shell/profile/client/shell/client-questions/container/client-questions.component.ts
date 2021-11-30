import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IClientConsultation } from '@psycho/core';
import { ClientQuestionsFacade } from '../client-questions.facade';

@Component({
  selector: 'psycho-client-questions',
  templateUrl: './client-questions.component.html',
  styleUrls: ['./client-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ClientQuestionsFacade
  ]
})
export class ClientQuestionsComponent {
  seletedConsultationId!: number;
  newConsultations$ = this.facade.newConsultations$;
  pastConsultations$ = this.facade.pastConsultations$;
  constructor(
    private readonly facade: ClientQuestionsFacade
  ) { }

  ngOnInit(): void {
  }

  onSelect(consultation: IClientConsultation): void {
    this.seletedConsultationId = consultation.id;
    this.facade.onConsultationSelect(consultation);
  }

}
