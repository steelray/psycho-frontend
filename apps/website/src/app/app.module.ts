import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './container/app.component';
import { WebCoreModule } from '@psycho/web/core';
import { CoreSharedModules, ENVIRONMENTS } from '@psycho/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormFieldModule } from '@psycho/web/features';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ChatWidgetModule } from '../../../../libs/features/src/lib/widgets/chat/chat.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    WebCoreModule,
    BrowserModule,
    CoreSharedModules,
    AppRoutingModule,
    BrowserAnimationsModule,
    LazyLoadImageModule,
    FormFieldModule,
    NgxMaskModule.forRoot(maskConfig),
    MatSnackBarModule,
    ChatWidgetModule

  ],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment
    },
    { provide: LOCALE_ID, useValue: "ru-RU" }, //replace "en-US" with your locale

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
