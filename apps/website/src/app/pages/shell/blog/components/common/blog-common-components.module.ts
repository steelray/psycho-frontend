import { NgModule } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { MatRippleModule } from '@angular/material/core';
import { BlogSharedComponentsModule } from '../shared/blog-shared-components.module';
import { BlogDescriptionComponent } from './blog-description/blog-description.component';
import { PipesModule } from '@psycho/features';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';
import { FormFieldModule } from '@psycho/web/features';

const COMPONENTS = [
  BlogSidebarComponent,
  BlogHeaderComponent,
  BlogDescriptionComponent,
  BlogLayoutComponent
];

@NgModule({
  imports: [
    CoreSharedModules,
    MatButtonModule,
    MaterialIconCustomizeModule,
    MatRippleModule,
    BlogSharedComponentsModule,
    PipesModule,
    FormFieldModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class BlogCommonComponentsModule { }