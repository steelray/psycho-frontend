import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogLandingRoutingModule } from './blog-landing-routing.module';
import { BlogLandingComponent } from './container/blog-landing.component';


@NgModule({
  declarations: [
    BlogLandingComponent
  ],
  imports: [
    CommonModule,
    BlogLandingRoutingModule
  ]
})
export class BlogLandingModule { }
