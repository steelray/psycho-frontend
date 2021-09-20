import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebCoreModule } from '@psycho/web/core';
import { ENVIRONMENTS } from '@psycho/core';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [WebCoreModule],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
