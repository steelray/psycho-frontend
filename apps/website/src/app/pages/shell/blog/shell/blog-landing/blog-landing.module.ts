import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogLandingRoutingModule } from './blog-landing-routing.module';
import { BlogLandingComponent } from './container/blog-landing.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogShellSharedModule } from '../shared/blog-shell-shared.module';


@NgModule({
  declarations: [
    BlogLandingComponent
  ],
  imports: [
    CommonModule,
    BlogLandingRoutingModule,
    NgxPaginationModule,
    BlogShellSharedModule
  ]
})
export class BlogLandingModule { }
