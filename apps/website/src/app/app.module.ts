import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebCoreModule } from '@psycho/web/core';
import { CoreSharedModules, ENVIRONMENTS } from '@psycho/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    WebCoreModule,
    BrowserModule,
    CoreSharedModules,
    AppRoutingModule,

  ],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
