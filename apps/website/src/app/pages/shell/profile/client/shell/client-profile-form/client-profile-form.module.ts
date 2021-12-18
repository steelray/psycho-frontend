import { NgModule } from '@angular/core';

import { ClientProfileFormRoutingModule } from './client-profile-form-routing.module';
import { ClientProfileFormComponent } from './container/client-profile-form.component';
import { CoreSharedModules } from '@psycho/core';
import { MatStepperModule } from '@angular/material/stepper';

import { ClientProfileFormsModule } from '../../../shared/components/client-profile-forms/client-profile-forms.module';


@NgModule({
  declarations: [
    ClientProfileFormComponent,
  ],
  imports: [
    CoreSharedModules,
    ClientProfileFormRoutingModule,
    MatStepperModule,
    ClientProfileFormsModule
  ]
})
export class ClientProfileFormModule { }
