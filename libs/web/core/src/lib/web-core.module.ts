import { Inject, Injectable, LOCALE_ID, NgModule, Optional, PLATFORM_ID, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { throwIfAlreadyLoaded } from '@psycho/utils';
import {
  AuthInterceptor,
  CoreModule, CUSTOM_DATE_FORMATS, HttpErrorInterceptor, TimestampInterceptor,
} from '@psycho/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import localeRu from '@angular/common/locales/ru';
import { isPlatformServer, registerLocaleData } from '@angular/common';
import { PlatformWindowToken } from '@psycho/core';
registerLocaleData(localeRu, 'ru');
// bring in custom web services here...
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

// factories


function winFactory(isServerService: IsServerService): any {
  return isServerService.isServer ? null : window;
}

@Injectable({
  providedIn: 'root'
})
class IsServerService {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: string
  ) { }

  get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}


@NgModule({
  imports: [

    CoreModule.forRoot([
      {
        provide: PlatformWindowToken,
        useFactory: winFactory,
        deps: [IsServerService]
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TimestampInterceptor,
        multi: true
      },
      { provide: LOCALE_ID, useValue: 'ru-RU' },
      { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
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
