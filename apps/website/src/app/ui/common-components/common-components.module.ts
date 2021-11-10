import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CoreSharedModules } from '@psycho/core';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { UIModule } from '@psycho/features';

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
    MaterialIconCustomizeModule,
    MatRippleModule,
    MatMenuModule,
    UIModule
  ]
})
export class CommonComponentsModule { }
