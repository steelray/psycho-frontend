import { NgModule } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { CommonComponentsModule } from '../ui/common-components/common-components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './container/pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [CoreSharedModules, PagesRoutingModule, CommonComponentsModule]
})
export class PagesModule { }