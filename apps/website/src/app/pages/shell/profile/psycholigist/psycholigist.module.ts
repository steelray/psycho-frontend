import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsycholigistRoutingModule } from './psycholigist-routing.module';
import { PsycholigistComponent } from './container/psycholigist.component';


@NgModule({
  declarations: [
    PsycholigistComponent
  ],
  imports: [
    CommonModule,
    PsycholigistRoutingModule
  ]
})
export class PsycholigistModule { }
