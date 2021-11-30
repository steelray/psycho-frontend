import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychologistConsultationsComponent } from './container/psychologist-consultations.component';

const routes: Routes = [{ path: '', component: PsychologistConsultationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistConsultationsRoutingModule { }
