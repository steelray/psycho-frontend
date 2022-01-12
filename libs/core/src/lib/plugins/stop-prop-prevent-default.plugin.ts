import { Injectable } from '@angular/core';
import { IEventManagerPlugin } from './event-manager-plugin.interface';

@Injectable({
  providedIn: 'root'
})
export class StopPropPreventDefaultPlugin implements IEventManagerPlugin {

  supports(eventName: string): boolean {
    const eventNameArr = eventName?.split('.');

    return eventNameArr.includes('stop') || eventNameArr.includes('prevent');
  }

  addEventListener(
    element: HTMLElement,
    eventName: string,
    originalHandler: Function
  ): Function {
    const eventNameArr = eventName?.split('.');

    const [nativeEventName] = eventNameArr;
    const enhancedHandler = (event: Event) => {
      if (eventNameArr.includes('stop')) {
        event.stopPropagation();
      } else if (eventNameArr.includes('prevent')) {
        event.preventDefault();
      }
      originalHandler(event);
    };
    element.addEventListener(nativeEventName, enhancedHandler);

    return () => element.removeEventListener(nativeEventName, enhancedHandler);
  }

}