import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './container/page.component';
import { PipesModule } from '@psycho/features';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    PipesModule
  ]
})
export class PageModule { }
