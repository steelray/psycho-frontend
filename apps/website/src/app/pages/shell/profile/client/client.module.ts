import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './container/client.component';
import { CoreSharedModules } from '@psycho/core';
import { ProfileSharedComponentsModule } from '../shared/components/profile-shared-components.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CoreSharedModules,
    ClientRoutingModule,
    ProfileSharedComponentsModule,
    MatButtonModule
  ]
})
export class ClientModule { }
