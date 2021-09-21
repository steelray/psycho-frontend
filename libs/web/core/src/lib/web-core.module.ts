import { APP_INITIALIZER, LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { throwIfAlreadyLoaded } from '@psycho/utils';
import {
  CoreModule, CUSTOM_DATE_FORMATS, HttpErrorInterceptor,
} from '@psycho/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { PlatformWindowToken } from 'libs/core/src/lib/services/shared/tokens';
registerLocaleData(localeRu, 'ru');
// bring in custom web services here...
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

// factories


function winFactory(): any {
  return window;
}


@NgModule({
  imports: [

    CoreModule.forRoot([
      {
        provide: PlatformWindowToken,
        useFactory: winFactory,
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
      },
      { provide: LOCALE_ID, useValue: 'ru' },
      { provide: MAT_DATE_LOCALE, useValue: 'ru' },
      { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
      { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
      {
        provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
        useValue: {
          duration: 4000,
          action: 'закрыть',
          verticalPosition: 'top'
        }
      }
    ]),
  ]
})
export class WebCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: WebCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'WebCoreModule');
  }
}
