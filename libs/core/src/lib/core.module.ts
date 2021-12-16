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
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; // <-- #2 import module
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { StopPropPreventDefaultPlugin } from '../lib/plugins/stop-prop-prevent-default.plugin';

@NgModule({
  imports: [HttpClientModule, RxReactiveFormsModule],
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
        {
          provide: EVENT_MANAGER_PLUGINS,
          useExisting: StopPropPreventDefaultPlugin,
          multi: true
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
