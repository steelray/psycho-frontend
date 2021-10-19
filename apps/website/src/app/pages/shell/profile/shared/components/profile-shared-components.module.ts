import { NgModule, Type } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';

const DECLARATIONS: Array<Type<any> | any[]> = [
  ProfileLayoutComponent
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CoreSharedModules]
})
export class ProfileSharedComponentsModule { }