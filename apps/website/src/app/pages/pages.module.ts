import { NgModule } from '@angular/core';
import { CoreSharedModules } from '@psycho/core';
import { CommonComponentsModule } from '../ui/common-components/common-components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './container/pages.component';
import { PageNotFoundComponent } from './shell/not-found/page-not-found.component';

@NgModule({
  declarations: [PagesComponent, PageNotFoundComponent],
  imports: [CoreSharedModules, PagesRoutingModule, CommonComponentsModule]
})
export class PagesModule { }