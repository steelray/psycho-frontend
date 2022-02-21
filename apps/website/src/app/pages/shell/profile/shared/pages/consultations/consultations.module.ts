import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ConsultationsComponent } from './container/consultations.component';
import { CoreSharedModules } from '@psycho/core';
import { ProfileSharedComponentsModule } from '../../components/profile-shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '@psycho/web/features';
import { ChatWidgetModule, PipesModule, UIModule } from '@psycho/features';
import { TakeToWorkConfirmDialogComponent } from './components/take-to-work-confirm-dialog/take-to-work-confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { ReviewDialogComponent } from './components/review-dialog/review-dialog.component';
import { SharedComponentsModule } from 'apps/website/src/app/ui/shared-components/shared-components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ChatModule } from 'apps/website/src/app/ui/widgets/chat/chat.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ConsultationsComponent,
    TakeToWorkConfirmDialogComponent,
    ReviewDialogComponent
  ],
  imports: [
    CoreSharedModules,
    ConsultationsRoutingModule,

    ProfileSharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    FormFieldModule,
    ChatWidgetModule,
    PipesModule,
    UIModule,
    MatButtonModule,
    MaterialIconCustomizeModule,
    SharedComponentsModule,
    MatDialogModule,
    ChatModule,
    MatProgressSpinnerModule
  ]
})
export class ConsultationsModule { }
