import { NgModule } from '@angular/core';
import { SubjectItemComponent } from './subject-item/subject-item.component';
import { CoreSharedModules } from '@psycho/core';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { PipesModule } from '@psycho/features';
import { RatingModule } from 'ng-starrating';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { PsychologistItemComponent } from './psychologist-item/psychologist-item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { GreetingBlockComponent } from './greeting-block/greeting-block.component';

const COMPONENTS = [
  SubjectItemComponent,
  RatingStarsComponent,
  PsychologistItemComponent,
  BreadcrumbsComponent,
  GreetingBlockComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CoreSharedModules,
    MaterialIconCustomizeModule,
    PipesModule,
    RatingModule,
    RouterModule
  ]
})
export class SharedComponentsModule { }
