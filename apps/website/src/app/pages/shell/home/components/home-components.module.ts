import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CoreSharedModules } from '@psycho/core';
import { PipesModule } from '@psycho/features';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedComponentsModule } from '../../../../ui/shared-components/shared-components.module';
import { HomeFirstMeetingComponent } from './home-first-meeting/home-first-meeting.component';
import { HomeGreetingsBlockComponent } from './home-greetings-block/home-greetings-block.component';
import { HomeHowItWorksComponent } from './home-how-it-works/home-how-it-works.component';
import { HomeServicesPriceComponent } from './home-services-price/home-services-price.component';
import { HomeSubjectsComponent } from './home-subjects/home-subjects.component';
import { HomeTrustedSpecDescComponent } from './home-trusted-spec-desc/home-trusted-spec-desc.component';
import { HomeTrustedSpecsComponent } from './home-trusted-specs/home-trusted-specs.component';

const COMPONENTS = [
  HomeGreetingsBlockComponent,
  HomeSubjectsComponent,
  HomeTrustedSpecDescComponent,
  HomeTrustedSpecsComponent,
  HomeServicesPriceComponent,
  HomeFirstMeetingComponent,
  HomeHowItWorksComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CoreSharedModules,
    MatButtonModule,
    SharedComponentsModule,
    MaterialIconCustomizeModule,
    PipesModule,
    CarouselModule
  ]
})
export class HomeComponentsModule { }