import { NgModule } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { PictureComponent } from './picture/picture.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const COMPONENTS = [
  PictureComponent
];

@NgModule({
  imports: [CoreSharedModules, LazyLoadImageModule],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class UIModule { }