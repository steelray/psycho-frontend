import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistQuestionsRoutingModule } from './psychologist-questions-routing.module';
import { PsychologistQuestionsComponent } from './container/psychologist-questions.component';
import { CoreSharedModules } from '@psycho/core';
import { ChatWidgetModule, PipesModule, UIModule } from '@psycho/features';
import { ProfileSharedComponentsModule } from '../../../shared/components/profile-shared-components.module';


@NgModule({
  declarations: [
    PsychologistQuestionsComponent
  ],
  imports: [
    CoreSharedModules,
    UIModule,
    PsychologistQuestionsRoutingModule,
    ChatWidgetModule,
    ProfileSharedComponentsModule,
    PipesModule
  ]
})
export class PsychologistQuestionsModule { }
