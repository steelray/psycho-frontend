import { NgModule } from '@angular/core';

import { ClientPsychologistsRoutingModule } from './client-psychologists-routing.module';
import { ClientPsychologistsComponent } from './container/client-psychologists.component';
import { CoreSharedModules } from '@psycho/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedComponentsModule } from '../../../../../../ui/shared-components/shared-components.module';


@NgModule({
  declarations: [
    ClientPsychologistsComponent
  ],
  imports: [
    CoreSharedModules,
    ClientPsychologistsRoutingModule,
    MatButtonModule,
    SharedComponentsModule
  ]
})
export class ClientPsychologistsModule { }
