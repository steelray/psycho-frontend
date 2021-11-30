import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychologistQuestionsComponent } from './container/psychologist-questions.component';

const routes: Routes = [{
  path: '',
  component: PsychologistQuestionsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistQuestionsRoutingModule { }
