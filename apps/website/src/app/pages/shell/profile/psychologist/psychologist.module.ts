import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistRoutingModule } from './psychologist-routing.module';
import { PsychologistComponent } from './container/psychologist.component';
import { CoreSharedModules } from '@psycho/core';
import { ProfileSharedComponentsModule } from '../shared/components/profile-shared-components.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PsychologistComponent
  ],
  imports: [
    CoreSharedModules,
    PsychologistRoutingModule,
    ProfileSharedComponentsModule,
    MatButtonModule
  ]
})
export class PsychologistModule { }
