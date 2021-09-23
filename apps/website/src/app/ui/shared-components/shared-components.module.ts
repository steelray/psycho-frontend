import { NgModule } from '@angular/core';
import { SubjectItemComponent } from './subject-item/subject-item.component';
import { CoreSharedModules } from '@psycho/core';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { PipesModule } from '@psycho/features';
import { RatingModule } from 'ng-starrating';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

const COMPONENTS = [
  SubjectItemComponent,
  RatingStarsComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CoreSharedModules,
    MaterialIconCustomizeModule,
    PipesModule,
    RatingModule
  ]
})
export class SharedComponentsModule { }
