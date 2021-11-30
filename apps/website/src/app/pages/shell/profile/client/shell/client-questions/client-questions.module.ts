import { NgModule } from '@angular/core';

import { ClientQuestionsRoutingModule } from './client-questions-routing.module';
import { ClientQuestionsComponent } from './container/client-questions.component';
import { CoreSharedModules } from '@psycho/core';
import { ChatWidgetModule, PipesModule, UIModule } from '@psycho/features';
import { ProfileSharedComponentsModule } from '../../../shared/components/profile-shared-components.module';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ClientQuestionsComponent
  ],
  imports: [
    CoreSharedModules,
    UIModule,
    ProfileSharedComponentsModule,
    ClientQuestionsRoutingModule,
    MatButtonModule,
    MatRippleModule,
    PipesModule,
    ChatWidgetModule

  ]
})
export class ClientQuestionsModule { }
