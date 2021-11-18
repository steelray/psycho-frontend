import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychologistFinancesComponent } from './container/psychologist-finances.component';

const routes: Routes = [{ path: '', component: PsychologistFinancesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistFinancesRoutingModule { }
