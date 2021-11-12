import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistRoutingModule } from './psychologist-routing.module';
import { PsychologistComponent } from './container/psychologist.component';


@NgModule({
  declarations: [
    PsychologistComponent
  ],
  imports: [
    CommonModule,
    PsychologistRoutingModule
  ]
})
export class PsychologistModule { }
