import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSessionRoutingModule } from './new-session-routing.module';
import { NewSessionComponent } from './container/new-session.component';
import { CoreSharedModules } from '@psycho/core';
import { MatStepperModule } from '@angular/material/stepper';
import { ClientProfileFormsModule } from '../../../shared/components/client-profile-forms/client-profile-forms.module';


@NgModule({
  declarations: [
    NewSessionComponent
  ],
  imports: [
    CoreSharedModules,
    NewSessionRoutingModule,

    MatStepperModule,
    ClientProfileFormsModule
  ]
})
export class NewSessionModule { }
