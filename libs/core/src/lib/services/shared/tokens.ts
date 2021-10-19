import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { IEnvironment } from '../../environments';
import { IXPlatWindow } from '../../models';

/**
 * Various InjectionTokens shared across all platforms
 * Always suffix with 'Token' for clarity and consistency
 */

export const PlatformLanguageToken = new InjectionToken<string>(
  'PlatformLanguageToken'
);
export const PlatformWindowToken = new InjectionToken<IXPlatWindow>(
  'PlatformWindowToken'
);

export const PRESSED_KEY = new InjectionToken<Observable<string>>('Keyboard press stream', {
  factory: () => {
    const documentRef = inject(DOCUMENT);
    return fromEvent(documentRef.body, 'keyup').pipe(
      debounceTime(300),
      map((event: any) => event.key)
    );
  }
});

export const ENVIRONMENTS = new InjectionToken<IEnvironment>('APP ENVIRONMENTS');