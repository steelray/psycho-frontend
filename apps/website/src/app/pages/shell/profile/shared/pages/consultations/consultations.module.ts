import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ConsultationsComponent } from './container/consultations.component';
import { CoreSharedModules } from '@psycho/core';
import { ProfileSharedComponentsModule } from '../../components/profile-shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '@psycho/web/features';
import { ChatWidgetModule, PipesModule, UIModule } from '@psycho/features';


@NgModule({
  declarations: [
    ConsultationsComponent
  ],
  imports: [
    CoreSharedModules,
    ConsultationsRoutingModule,

    ProfileSharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    FormFieldModule,
    ChatWidgetModule,
    PipesModule,
    UIModule
  ]
})
export class ConsultationsModule { }
