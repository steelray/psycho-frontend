import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoreSharedModules } from '@psycho/core';
import { DirectivesModule, PipesModule, UIModule } from '@psycho/features';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { ChatComponent } from './container/chat.component';
import { ChatDirective } from './directives/chat.directive';

const DECLARATIONS = [ChatComponent, ChatDirective];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CoreSharedModules,
    MatProgressSpinnerModule,
    MaterialIconCustomizeModule,
    UIModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: DECLARATIONS
})
export class ChatWidgetModule { }