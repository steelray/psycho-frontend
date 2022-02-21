import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChatComponent } from './chat.component';
import { SocketService } from './shared/services/socket.service';
import { StoreUserService } from './shared/services/store-user.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MaterialIconCustomizeModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [ChatComponent],
  providers: [StoreUserService],
  exports: [ChatComponent]
})
export class ChatModule { }
