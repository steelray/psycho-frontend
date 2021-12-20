import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ConsultationsComponent } from './container/consultations.component';
import { CoreSharedModules } from '@psycho/core';
import { ProfileSharedComponentsModule } from '../../components/profile-shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '@psycho/web/features';
import { ChatWidgetModule, PipesModule, UIModule } from '@psycho/features';
import { TakeToWorkConfirmDialogComponent } from './components/take-to-work-confirm-dialog/take-to-work-confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ConsultationsComponent,
    TakeToWorkConfirmDialogComponent
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
    UIModule,
    MatButtonModule
  ]
})
export class ConsultationsModule { }
