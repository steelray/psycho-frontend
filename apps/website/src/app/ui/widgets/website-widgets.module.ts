import { NgModule } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { DirectivesModule } from '@psycho/features';
import { ChatComponent } from './chat/chat.component';

const COMPONENTS = [
  ChatComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CoreSharedModules,
    DirectivesModule
  ]
})
export class WebsiteWidgetsModule { }