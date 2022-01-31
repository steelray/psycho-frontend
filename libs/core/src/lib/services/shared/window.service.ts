// angular
import { Injectable, Inject } from '@angular/core';

// app
import { isObject, isNativeScript } from '@psycho/utils';
import { XPlatWindow } from '../../models';
import { PlatformWindowToken } from './tokens';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  constructor(
    // tslint:disable-next-line:variable-name
    @Inject(PlatformWindowToken) private _platformWindow: XPlatWindow
  ) { }

  public get navigator(): any {
    return this._platformWindow?.navigator;
  }

  public get location(): any {
    return this._platformWindow?.location;
  }

  public get process(): any {
    return this._platformWindow?.process;
  }

  public get require(): any {
    return this._platformWindow?.require;
  }

  public get history(): any {
    return this._platformWindow?.history;
  }

  public get localStorage(): any {
    return this._platformWindow?.localStorage;
  }

  public alert(msg: any): Promise<void> {
    return new Promise((resolve, reject) => {
      const result: any = this._platformWindow.alert(msg);
      if (isObject(result) && result.then) {
        // console.log('WindowService -- using result.then promise');
        result.then(resolve, reject);
      } else {
        resolve();
      }
    });
  }

  public confirm(
    msg: any,
    // tslint:disable-next-line:ban-types
    action?: Function /* used for fancyalerts on mobile*/
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:no-angle-bracket-type-assertion
      const result: any = (<any>this._platformWindow).confirm(
        msg,
        isNativeScript() ? action : undefined
      );
      if (isObject(result) && result.then) {
        result.then(resolve, reject);
      } else if (result) {
        resolve(true);
      } else {
        reject();
      }
    });
  }

  public setTimeout(
    handler: (...args: any[]) => void,
    timeout?: number
  ): number {
    return this._platformWindow.setTimeout(handler, timeout);
  }

  public clearTimeout(timeoutId: number): void {
    return this._platformWindow.clearTimeout(timeoutId);
  }

  public setInterval(
    handler: (...args: any[]) => void,
    ms?: number,
    ...args: any[]
  ): number {
    return this._platformWindow.setInterval(handler, ms, args);
  }

  public clearInterval(intervalId: number): void {
    return this._platformWindow.clearInterval(intervalId);
  }
}
