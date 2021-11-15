import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychologistSetScheduleComponent } from './container/psychologist-set-schedule.component';

const routes: Routes = [{ path: '', component: PsychologistSetScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistSetScheduleRoutingModule { }
