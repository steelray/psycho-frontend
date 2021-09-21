import { NgModule } from '@angular/core';
import { SubjectItemComponent } from './subject-item/subject-item.component';
import { CoreSharedModules } from '@psycho/core';
import { MaterialIconCustomizeModule } from '@psycho/web/core';

const COMPONENTS = [
  SubjectItemComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CoreSharedModules,
    MaterialIconCustomizeModule
  ]
})
export class SharedComponentsModule { }
