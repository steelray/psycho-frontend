import { NgModule } from '@angular/core';

import { ClientProfileFormRoutingModule } from './client-profile-form-routing.module';
import { ClientProfileFormComponent } from './container/client-profile-form.component';
import { CoreSharedModules } from '@psycho/core';
import { MatStepperModule } from '@angular/material/stepper';
import { ClientProfileFormFormatComponent } from './components/client-profile-form-format/client-profile-form-format.component';
import { ClientProfileFormQuestionsComponent } from './components/client-profile-form-questions/client-profile-form-questions.component';
import { ClientProfileFormSubjectsComponent } from './components/client-profile-form-subjects/client-profile-form-subjects.component';
import { ClientProfileFormPsychologistsComponent } from './components/client-profile-form-psychologists/client-profile-form-psychologists.component';
import { ClientProfileFormDatetimeComponent } from './components/client-profile-form-datetime/client-profile-form-datetime.component';
import { ClientProfileFormPaymentConditionsComponent } from './components/client-profile-form-payment-conditions/client-profile-form-payment-conditions.component';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormFieldModule } from '@psycho/web/features';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedComponentsModule } from '../../../../../../ui/shared-components/shared-components.module';
import { PipesModule } from '@psycho/features';


@NgModule({
  declarations: [
    ClientProfileFormComponent,
    ClientProfileFormFormatComponent,
    ClientProfileFormQuestionsComponent,
    ClientProfileFormSubjectsComponent,
    ClientProfileFormPsychologistsComponent,
    ClientProfileFormDatetimeComponent,
    ClientProfileFormPaymentConditionsComponent
  ],
  imports: [
    CoreSharedModules,
    ClientProfileFormRoutingModule,
    MatStepperModule,
    MatRippleModule,
    MatButtonModule,
    FormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    SharedComponentsModule,
    PipesModule
  ]
})
export class ClientProfileFormModule { }
