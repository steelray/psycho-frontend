import { NgModule } from '@angular/core';
import { SubjectItemComponent } from './subject-item/subject-item.component';
import { CoreSharedModules } from '@psycho/core';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { PipesModule, UIModule } from '@psycho/features';
import { RatingModule } from 'ng-starrating';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { PsychologistItemComponent } from './psychologist-item/psychologist-item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { GreetingBlockComponent } from './greeting-block/greeting-block.component';
import { PsychologistCardComponent } from './psychologist-card/psychologist-card.component';
import { MatButtonModule } from '@angular/material/button';

const COMPONENTS = [
  SubjectItemComponent,
  RatingStarsComponent,
  PsychologistItemComponent,
  BreadcrumbsComponent,
  GreetingBlockComponent,
  PsychologistCardComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CoreSharedModules,
    MaterialIconCustomizeModule,
    PipesModule,
    RatingModule,
    RouterModule,
    UIModule,
    MatButtonModule
  ]
})
export class SharedComponentsModule { }
