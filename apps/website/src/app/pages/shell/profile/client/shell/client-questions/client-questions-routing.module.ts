import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientQuestionsComponent } from './container/client-questions.component';

const routes: Routes = [
  {
    path: '',
    component: ClientQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientQuestionsRoutingModule { }
