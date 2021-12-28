import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './container/post.component';
import { PipesModule, UIModule } from '@psycho/features';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedComponentsModule } from '../../../../../ui/shared-components/shared-components.module';
import { BlogSharedComponentsModule } from '../../components/shared/blog-shared-components.module';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedComponentsModule,
    UIModule,
    PipesModule,
    MaterialIconCustomizeModule,
    BlogSharedComponentsModule,
    MatButtonModule
  ]
})
export class PostModule { }
