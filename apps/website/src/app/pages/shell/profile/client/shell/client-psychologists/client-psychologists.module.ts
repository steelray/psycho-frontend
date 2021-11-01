import { NgModule } from '@angular/core';

import { ClientPsychologistsRoutingModule } from './client-psychologists-routing.module';
import { ClientPsychologistsComponent } from './container/client-psychologists.component';
import { CoreSharedModules } from '@psycho/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedComponentsModule } from '../../../../../../ui/shared-components/shared-components.module';
import { ProfileSharedComponentsModule } from '../../../shared/components/profile-shared-components.module';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientPsycholigistSignDialogComponent } from './components/client-psycholigist-sign-dialog/client-psycholigist-sign-dialog.component';
import { FormFieldModule } from '@psycho/web/features';


@NgModule({
  declarations: [
    ClientPsychologistsComponent,
    ClientPsycholigistSignDialogComponent
  ],
  imports: [
    CoreSharedModules,
    ClientPsychologistsRoutingModule,
    MatButtonModule,
    SharedComponentsModule,
    ProfileSharedComponentsModule,
    MaterialIconCustomizeModule,
    MatDialogModule,
    FormFieldModule
  ]
})
export class ClientPsychologistsModule { }
