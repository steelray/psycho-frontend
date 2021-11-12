import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychologistComponent } from './container/psychologist.component';

const routes: Routes = [
  {
    path: '',
    component: PsychologistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistRoutingModule { }
