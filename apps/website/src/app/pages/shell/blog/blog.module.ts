import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './container/blog.component';
import { MatIconModule } from '@angular/material/icon';
import { CoreSharedModules } from '@psycho/core';
import { MatButtonModule } from '@angular/material/button';
import { BlogCommonComponentsModule } from './components/common/blog-common-components.module';
import { BlogSharedComponentsModule } from './components/shared/blog-shared-components.module';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CoreSharedModules,
    BlogRoutingModule,
    MatIconModule,
    MatButtonModule,
    BlogCommonComponentsModule,
    BlogSharedComponentsModule
  ]
})
export class BlogModule { }
