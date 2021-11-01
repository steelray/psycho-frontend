import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './container/client.component';
import { CoreSharedModules } from '@psycho/core';
import { ProfileSharedComponentsModule } from '../shared/components/profile-shared-components.module';
import { MatButtonModule } from '@angular/material/button';
import { ClientSharedFormsService } from '../shared/services/client-shared-forms.service';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CoreSharedModules,
    ClientRoutingModule,
    ProfileSharedComponentsModule,
    MatButtonModule
  ],
  providers: [
    ClientSharedFormsService
  ]
})
export class ClientModule { }
