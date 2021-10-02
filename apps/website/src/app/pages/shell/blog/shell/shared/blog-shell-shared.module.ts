import { NgModule } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { PostItemPrimaryComponent } from './post-item-primary/post-item-primary.component';
import { PostItemSecondaryComponent } from './post-item-secondary/post-item-secondary.component';

const COMPONENTS = [
  PostItemPrimaryComponent,
  PostItemSecondaryComponent
];

@NgModule({
  imports: [
    CoreSharedModules
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class BlogShellSharedModule { }