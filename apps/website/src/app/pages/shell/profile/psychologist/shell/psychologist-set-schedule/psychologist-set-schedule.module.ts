import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistSetScheduleRoutingModule } from './psychologist-set-schedule-routing.module';
import { PsychologistSetScheduleComponent } from './container/psychologist-set-schedule.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { PsychologistSetScheduleConsultationsDialogComponent } from './components/psychologist-set-schedule-consultations-dialog/psychologist-set-schedule-consultations-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PipesModule } from '@psycho/features';


@NgModule({
  declarations: [
    PsychologistSetScheduleComponent,
    PsychologistSetScheduleConsultationsDialogComponent
  ],
  imports: [
    CommonModule,
    PsychologistSetScheduleRoutingModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    PipesModule
  ]
})
export class PsychologistSetScheduleModule { }
