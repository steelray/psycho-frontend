import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistConsultationsRoutingModule } from './psychologist-consultations-routing.module';
import { PsychologistConsultationsComponent } from './container/psychologist-consultations.component';
import { ProfileSharedComponentsModule } from '../../../shared/components/profile-shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '@psycho/web/features';
import { ChatWidgetModule, PipesModule, UIModule } from '@psycho/features';


@NgModule({
  declarations: [
    PsychologistConsultationsComponent
  ],
  imports: [
    CommonModule,
    PsychologistConsultationsRoutingModule,
    UIModule,

    ProfileSharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    FormFieldModule,
    ChatWidgetModule,
    PipesModule
  ]
})
export class PsychologistConsultationsModule { }
