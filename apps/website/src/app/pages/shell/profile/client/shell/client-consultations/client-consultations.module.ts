import { NgModule } from '@angular/core';

import { ClientConsultationsRoutingModule } from './client-consultations-routing.module';
import { ClientConsultationsComponent } from './container/client-consultations.component';
import { CoreSharedModules } from '@psycho/core';
import { ProfileSharedComponentsModule } from '../../../shared/components/profile-shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '@psycho/web/features';
import { ChatWidgetModule, PipesModule, UIModule } from '@psycho/features';


@NgModule({
  declarations: [
    ClientConsultationsComponent
  ],
  imports: [
    CoreSharedModules,
    ClientConsultationsRoutingModule,

    ProfileSharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    FormFieldModule,
    ChatWidgetModule,
    PipesModule,
    UIModule
  ]
})
export class ClientConsultationsModule { }
