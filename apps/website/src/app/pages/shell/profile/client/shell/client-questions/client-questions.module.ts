import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientQuestionsRoutingModule } from './client-questions-routing.module';
import { ClientQuestionsComponent } from './client-questions.component';


@NgModule({
  declarations: [
    ClientQuestionsComponent
  ],
  imports: [
    CommonModule,
    ClientQuestionsRoutingModule
  ]
})
export class ClientQuestionsModule { }
