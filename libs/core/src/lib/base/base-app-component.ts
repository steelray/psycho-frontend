import { Directive } from '@angular/core';
import { BaseComponent } from './base-component';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class BaseAppComponent extends BaseComponent {
  constructor(
  ) {
    super();
  }
}
