import { Directive, Inject, Input } from '@angular/core';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { MaxRangeSelectionStrategy } from './range-datepicker-max-range-strategy';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[maxRange]',
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: MaxRangeSelectionStrategy
    }
  ]
})
export class RangeDatepickerMaxRangeDirective {
  constructor(
    @Inject(MAT_DATE_RANGE_SELECTION_STRATEGY)
    private maxRangeStrategy: MaxRangeSelectionStrategy<any>
  ) { }
  @Input() set maxRange(value: number) {
    this.maxRangeStrategy.delta = +value || 7;
  }
}
