import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IClientConsultation, IUser } from '@psycho/core';
import { PsychologistQuestionsFacade } from '../psychologist-questions.facade';

@Component({
  selector: 'psycho-psychologist-questions',
  templateUrl: './psychologist-questions.component.html',
  styleUrls: ['./psychologist-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PsychologistQuestionsFacade
  ]
})
export class PsychologistQuestionsComponent implements OnInit {
  seletedConsultationId!: number;
  newConsultations$ = this.facade.newConsultations$;
  pastConsultations$ = this.facade.pastConsultations$;
  constructor(
    private readonly facade: PsychologistQuestionsFacade
  ) { }

  ngOnInit(): void {
  }

  onSelect(consultation: IClientConsultation): void {
    this.seletedConsultationId = consultation.id;
    this.facade.onConsultationSelect(consultation);
  }

}
