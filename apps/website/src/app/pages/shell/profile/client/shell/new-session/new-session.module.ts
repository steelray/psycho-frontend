import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSessionRoutingModule } from './new-session-routing.module';
import { NewSessionComponent } from './container/new-session.component';


@NgModule({
  declarations: [
    NewSessionComponent
  ],
  imports: [
    CommonModule,
    NewSessionRoutingModule
  ]
})
export class NewSessionModule { }
