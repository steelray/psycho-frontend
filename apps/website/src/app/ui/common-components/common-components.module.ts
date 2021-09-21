import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CoreSharedModules } from '@psycho/core';
import { MatButtonModule } from '@angular/material/button';

const COMPONENTS = [
  HeaderComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: [COMPONENTS],
  imports: [
    CoreSharedModules,
    MatButtonModule
  ]
})
export class CommonComponentsModule { }
