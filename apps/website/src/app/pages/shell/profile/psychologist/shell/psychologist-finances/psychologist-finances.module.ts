import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistFinancesRoutingModule } from './psychologist-finances-routing.module';
import { PsychologistFinancesComponent } from './psychologist-finances.component';


@NgModule({
  declarations: [
    PsychologistFinancesComponent
  ],
  imports: [
    CommonModule,
    PsychologistFinancesRoutingModule
  ]
})
export class PsychologistFinancesModule { }
