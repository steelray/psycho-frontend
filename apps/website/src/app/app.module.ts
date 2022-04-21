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
import { MetrikaModule } from 'ng-yandex-metrika';
import { MainComponent } from './main/main.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

const IMPORTS = [
  WebCoreModule,
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
  CoreSharedModules,
  AppRoutingModule,
  BrowserAnimationsModule,
  LazyLoadImageModule,
  FormFieldModule,
  NgxMaskModule.forRoot(maskConfig),
  MatSnackBarModule,
  ChatWidgetModule,
];

if (environment.production) {
  IMPORTS.push(
    MetrikaModule.forRoot(
      {
        id: 73117528,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }, // CounterConfig | CounterConfig[]
    ))
}

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: IMPORTS,
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
