import { Directive, OnDestroy } from '@angular/core';

// libs
import { Subject } from 'rxjs';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class BaseComponent implements OnDestroy {
  // tslint:disable-next-line:variable-name
  private _destroy$?: Subject<any>;

  // tslint:disable-next-line:typedef
  get destroy$() {
    if (!this._destroy$) {
      // Perf optimization:
      // since this is likely used as base component everywhere
      // only construct a Subject instance if actually used
      this._destroy$ = new Subject();
    }
    return this._destroy$;
  }

  ngOnDestroy(): void {
    if (this._destroy$) {
      this._destroy$.next(true);
      this._destroy$.complete();
    }
  }

  // for ionic apps
  ionViewDidLeave(): void {
    this.ngOnDestroy();
  }
}
