import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CoreSharedModules } from '@psycho/core';
import { UIModule } from '@psycho/features';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PostItemPrimaryComponent } from './post-item-primary/post-item-primary.component';
import { PostItemSecondaryComponent } from './post-item-secondary/post-item-secondary.component';
import { RelatedPostsComponent } from './related-posts/related-posts.component';

const COMPONENTS = [
  PostItemPrimaryComponent,
  PostItemSecondaryComponent,
  RelatedPostsComponent
];

@NgModule({
  imports: [
    CoreSharedModules,
    MatButtonModule,
    MaterialIconCustomizeModule,
    UIModule,
    CarouselModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class BlogSharedComponentsModule { }