import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CoreSharedModules } from '@psycho/core';
import { SharedComponentsModule } from '../../../../ui/shared-components/shared-components.module';
import { HomeGreetingsBlockComponent } from './home-greetings-block/home-greetings-block.component';
import { HomeSubjectsComponent } from './home-subjects/home-subjects.component';

const COMPONENTS = [
  HomeGreetingsBlockComponent,
  HomeSubjectsComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CoreSharedModules,
    MatButtonModule,
    SharedComponentsModule
  ]
})
export class HomeComponentsModule { }