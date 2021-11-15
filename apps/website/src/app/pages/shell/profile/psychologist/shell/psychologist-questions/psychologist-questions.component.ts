import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-psychologist-questions',
  templateUrl: './psychologist-questions.component.html',
  styleUrls: ['./psychologist-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
