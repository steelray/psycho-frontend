import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientProfileRoutingModule } from './client-profile-routing.module';
import { ClientProfileComponent } from './container/client-profile.component';
import { PipesModule, UIModule } from '@psycho/features';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '@psycho/web/features';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    ClientProfileComponent
  ],
  imports: [
    CommonModule,
    ClientProfileRoutingModule,
    UIModule,
    PipesModule,
    ReactiveFormsModule,
    FormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class ClientProfileModule { }
