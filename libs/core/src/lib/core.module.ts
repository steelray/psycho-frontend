import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

// libs
import { throwIfAlreadyLoaded } from '@psycho/utils';

// app
import { LogService } from './services/shared/log.service';
import { WindowService } from './services/shared/window.service';

@NgModule({
  imports: [CommonModule],
})
export class CoreModule {
  // configuredProviders: *required to configure WindowService and others per platform
  static forRoot(
    configuredProviders: Array<any>
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        LogService,
        WindowService,
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
        ...configuredProviders,
      ],
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
