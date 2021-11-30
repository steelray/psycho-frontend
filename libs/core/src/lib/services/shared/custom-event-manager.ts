import { Injectable, Inject, NgZone } from '@angular/core';
import { EVENT_MANAGER_PLUGINS, EventManager } from '@angular/platform-browser';

@Injectable()
export class CustomEventManager extends EventManager {
  constructor(@Inject(EVENT_MANAGER_PLUGINS) plugins: any[], private zone: NgZone) {
    super(plugins, zone);
  }

  addEventListener(element: HTMLElement, eventName: string, handler: any): any {
    if (eventName.endsWith('out-zone')) {
      eventName = eventName.split('.')[0];
      return this.zone.runOutsideAngular(() =>
        super.addEventListener(element, eventName, handler));
    }

    return super.addEventListener(element, eventName, handler);
  }
}