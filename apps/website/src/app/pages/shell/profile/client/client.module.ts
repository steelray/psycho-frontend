import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './container/client.component';
import { CoreSharedModules } from '@psycho/core';
import { ProfileSharedComponentsModule } from '../shared/components/profile-shared-components.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CoreSharedModules,
    ClientRoutingModule,
    ProfileSharedComponentsModule
  ]
})
export class ClientModule { }
