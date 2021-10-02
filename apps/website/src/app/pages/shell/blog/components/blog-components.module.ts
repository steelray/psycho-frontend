import { NgModule } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogDescriptionComponent } from './blog-description/blog-description.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialIconCustomizeModule } from '@psycho/web/core';

const COMPONENTS = [
  BlogSidebarComponent,
  BlogDescriptionComponent,
  BlogHeaderComponent
];

@NgModule({
  imports: [
    CoreSharedModules,
    MatButtonModule,
    MaterialIconCustomizeModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class BlogComponentsModule { }