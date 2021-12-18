import { NgModule } from '@angular/core';
import { ClientProfileFormFormatComponent } from './client-profile-form-format/client-profile-form-format.component';
import { ClientProfileFormQuestionsComponent } from './client-profile-form-questions/client-profile-form-questions.component';
import { ClientProfileFormSubjectsComponent } from './client-profile-form-subjects/client-profile-form-subjects.component';
import { ClientProfileFormPsychologistsComponent } from './client-profile-form-psychologists/client-profile-form-psychologists.component';
import { ClientProfileFormDatetimeComponent } from './client-profile-form-datetime/client-profile-form-datetime.component';
import { ClientProfileFormPaymentConditionsComponent } from './client-profile-form-payment-conditions/client-profile-form-payment-conditions.component';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormFieldModule } from '@psycho/web/features';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedComponentsModule } from 'apps/website/src/app/ui/shared-components/shared-components.module';
import { PipesModule, UIModule } from '@psycho/features';
import { MatIconModule } from '@angular/material/icon';
import { ProfileSharedComponentsModule } from '../profile-shared-components.module';
import { CoreSharedModules } from '@psycho/core';
import { ClientProfileFormsService } from './client-profile-forms.service';


const DECLARATIONS = [

  ClientProfileFormFormatComponent,
  ClientProfileFormQuestionsComponent,
  ClientProfileFormSubjectsComponent,
  ClientProfileFormPsychologistsComponent,
  ClientProfileFormDatetimeComponent,
  ClientProfileFormPaymentConditionsComponent
];

const MODULES = [
  CoreSharedModules,

  MatRippleModule,
  MatButtonModule,
  FormFieldModule,
  ReactiveFormsModule,
  MatCheckboxModule,
  SharedComponentsModule,
  PipesModule,
  MatIconModule,
  UIModule,
  ProfileSharedComponentsModule
];
const providers = [
  ClientProfileFormsService
];

@NgModule({
  declarations: DECLARATIONS,
  exports: [...MODULES, ...DECLARATIONS],
  imports: MODULES,
  providers: [ClientProfileFormsService]
})
export class ClientProfileFormsModule {

}