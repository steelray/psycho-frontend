import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './container/client.component';
import { CoreSharedModules } from '@psycho/core';
import { ProfileSharedComponentsModule } from '../shared/components/profile-shared-components.module';
import { MatButtonModule } from '@angular/material/button';
import { ClientSharedFormsService } from '../shared/services/client-shared-forms.service';
import { ClientNewSessionDialogComponent } from './components/client-new-session-dialog/client-new-session-dialog.component';
import { PipesModule, UIModule } from '@psycho/features';
import { SharedComponentsModule } from 'apps/website/src/app/ui/shared-components/shared-components.module';
import { MaterialIconCustomizeModule } from '@psycho/web/core';


@NgModule({
  declarations: [
    ClientComponent,
    ClientNewSessionDialogComponent
  ],
  imports: [
    CoreSharedModules,
    ClientRoutingModule,
    ProfileSharedComponentsModule,
    MatButtonModule,
    UIModule,
    SharedComponentsModule,
    PipesModule,
    MaterialIconCustomizeModule
  ],
  providers: [
    ClientSharedFormsService
  ]
})
export class ClientModule { }
