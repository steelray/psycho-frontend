import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebCoreModule } from '@psycho/web/core';

@NgModule({
  declarations: [AppComponent],
  imports: [WebCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
