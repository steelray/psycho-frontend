import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CoreSharedModules } from '@psycho/core';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { MaterialIconCustomizeModule } from '@psycho/web/core';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: [COMPONENTS],
  imports: [
    CoreSharedModules,
    MatButtonModule,
    MaterialIconCustomizeModule
  ]
})
export class CommonComponentsModule { }
