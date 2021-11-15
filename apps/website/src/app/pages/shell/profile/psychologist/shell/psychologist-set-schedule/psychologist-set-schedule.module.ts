import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistSetScheduleRoutingModule } from './psychologist-set-schedule-routing.module';
import { PsychologistSetScheduleComponent } from './container/psychologist-set-schedule.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    PsychologistSetScheduleComponent
  ],
  imports: [
    CommonModule,
    PsychologistSetScheduleRoutingModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule
  ]
})
export class PsychologistSetScheduleModule { }
