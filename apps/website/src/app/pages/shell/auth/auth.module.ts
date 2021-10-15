import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './shell/login/login.component';
import { SignupComponent } from './shell/signup/signup.component';
import { AuthComponent } from './container/auth.component';
import { SharedComponentsModule } from '../../../ui/shared-components/shared-components.module';
import { CoreSharedModules } from '@psycho/core';
import { FormFieldModule } from '@psycho/web/features';
import { MatButtonModule } from '@angular/material/button';
import { ResetPasswordComponent } from './shell/reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent,
    ResetPasswordComponent
  ],
  imports: [
    CoreSharedModules,
    AuthRoutingModule,
    SharedComponentsModule,
    FormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
