import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform, OnDestroy {
  private asyncPipe: AsyncPipe;

  constructor(private injector: Injector) {
    this.asyncPipe = new AsyncPipe(injector.get(ChangeDetectorRef));
  }

  transform(value: any, pattern: string = 'mediumDate'): any {
    const date = of('ru').pipe(
      map(lang => new DatePipe(lang)),
      map(datePipe => datePipe.transform(value, pattern))
    );
    return this.asyncPipe.transform(date);
  }

  ngOnDestroy(): void {
    this.asyncPipe.ngOnDestroy();
  }
}
