import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientProfileRoutingModule } from './client-profile-routing.module';
import { ClientProfileComponent } from './container/client-profile.component';
import { PipesModule, UIModule } from '@psycho/features';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '@psycho/web/features';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ClientProfileCardOperationsComponent } from './components/client-profile-card-operations/client-profile-card-operations.component';
import { CoreSharedModules } from '@psycho/core';
import { MaterialIconCustomizeModule } from '@psycho/web/core';



@NgModule({
  declarations: [
    ClientProfileComponent,
    ClientProfileCardOperationsComponent
  ],
  imports: [
    CoreSharedModules,
    ClientProfileRoutingModule,
    UIModule,
    PipesModule,
    ReactiveFormsModule,
    FormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MaterialIconCustomizeModule
  ]
})
export class ClientProfileModule { }
