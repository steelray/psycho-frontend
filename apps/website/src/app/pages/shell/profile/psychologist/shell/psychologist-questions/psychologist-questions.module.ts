import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistQuestionsRoutingModule } from './psychologist-questions-routing.module';
import { PsychologistQuestionsComponent } from './psychologist-questions.component';


@NgModule({
  declarations: [
    PsychologistQuestionsComponent
  ],
  imports: [
    CommonModule,
    PsychologistQuestionsRoutingModule
  ]
})
export class PsychologistQuestionsModule { }
