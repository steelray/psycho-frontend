import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychologistProfileComponent } from './container/psychologist-profile.component';

const routes: Routes = [{ path: '', component: PsychologistProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistProfileRoutingModule { }
