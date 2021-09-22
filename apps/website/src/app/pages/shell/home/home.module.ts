import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home.component';
import { CommonComponentsModule } from '../../../ui/common-components/common-components.module';
import { HomeComponentsModule } from './components/home-components.module';
import { SharedComponentsModule } from '../../../ui/shared-components/shared-components.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonComponentsModule,
    HomeComponentsModule,
    SharedComponentsModule
  ]
})
export class HomeModule { }
