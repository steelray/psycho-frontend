import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './shell/signup/signup.component';
import { AuthComponent } from './container/auth.component';
import { SharedComponentsModule } from '../../../ui/shared-components/shared-components.module';
import { CoreSharedModules } from '@psycho/core';
import { FormFieldModule } from '@psycho/web/features';
import { MatButtonModule } from '@angular/material/button';
import { ResetPasswordComponent } from './shell/reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './shell/login/login.component';

@NgModule({
  declarations: [
    SignupComponent,
    AuthComponent,
    ResetPasswordComponent,
    LoginComponent
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
