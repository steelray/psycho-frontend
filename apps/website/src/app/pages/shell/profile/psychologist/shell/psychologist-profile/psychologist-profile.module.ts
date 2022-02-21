import { NgModule } from '@angular/core';

import { PsychologistProfileRoutingModule } from './psychologist-profile-routing.module';
import { PsychologistProfileComponent } from './container/psychologist-profile.component';
import { CoreSharedModules } from '@psycho/core';
import { PipesModule, UIModule } from '@psycho/features';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '@psycho/web/features';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { PsychologistProfileSloganChangeDialogComponent } from './components/psychologist-profile-slogan-change-dialog/psychologist-profile-slogan-change-dialog.component';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { SharedComponentsModule } from '../../../../../../ui/shared-components/shared-components.module';
import { PsychologistProfileSubjectsUpdateDialogComponent } from './components/psychologist-profile-subjects-update-dialog/psychologist-profile-subjects-update-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PsychologistProfileComponent,
    PsychologistProfileSloganChangeDialogComponent,
    PsychologistProfileSubjectsUpdateDialogComponent
  ],
  imports: [
    CoreSharedModules,
    UIModule,
    PipesModule,
    ReactiveFormsModule,
    FormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    PsychologistProfileRoutingModule,
    MaterialIconCustomizeModule,
    SharedComponentsModule,
    MatDialogModule
  ]
})
export class PsychologistProfileModule { }
