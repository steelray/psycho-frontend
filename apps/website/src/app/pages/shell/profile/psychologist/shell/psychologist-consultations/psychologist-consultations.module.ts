import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistConsultationsRoutingModule } from './psychologist-consultations-routing.module';
import { PsychologistConsultationsComponent } from './psychologist-consultations.component';


@NgModule({
  declarations: [
    PsychologistConsultationsComponent
  ],
  imports: [
    CommonModule,
    PsychologistConsultationsRoutingModule
  ]
})
export class PsychologistConsultationsModule { }
