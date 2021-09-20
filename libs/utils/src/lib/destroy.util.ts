import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export function WithDestroy(Base?: any): any {
  const baseClass = Base || class EmptyBaseClass { };
  return class extends baseClass implements OnDestroy {
    private _destroy$!: Subject<any>;

    get destroy$(): Subject<any> {
      if (!this._destroy$) {
        this._destroy$ = new Subject();
      }
      return this._destroy$;
    }

    ngOnDestroy(): void {
      if (this._destroy$) {
        this.destroy$.next(true);
        this.destroy$.complete();
      }
    }
  };
}
