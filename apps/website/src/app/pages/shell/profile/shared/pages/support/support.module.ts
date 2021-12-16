import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './container/support.component';
import { CoreSharedModules } from '@psycho/core';
import { PipesModule, UIModule } from '@psycho/features';
import { SharedComponentsModule } from 'apps/website/src/app/ui/shared-components/shared-components.module';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CoreSharedModules,
    SupportRoutingModule,
    PipesModule,
    MaterialIconCustomizeModule,
    UIModule,
    FormsModule
  ]
})
export class SupportModule { }
