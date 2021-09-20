import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { BaseFormFieldComponent } from '@psycho/web/core';
import Russian from 'flatpickr/dist/l10n/ru.js';
import { FormControl } from '@angular/forms';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'pb-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DatetimepickerComponent extends BaseFormFieldComponent implements OnInit {
  options!: FlatpickrOptions;
  @Input() minDate!: string | Date;
  @Input() maxDate!: string | Date;
  @Input() mode!: string; // 'range' for range mode
  @Input() enableTime!: boolean;
  @Input() enableSeconds!: boolean;
  // range controls
  @Input() fromControl = new FormControl();
  @Input() toControl = new FormControl();

  ngOnInit(): void {
    super.ngOnInit();

    this.options = {
      minDate: this.minDate,
      maxDate: this.maxDate,
      mode: this.mode,
      enableSeconds: this.enableSeconds,
      enableTime: this.enableTime,
      dateFormat: 'd.m.Y H:i',
      locale: Russian.ru
    };

    if (this.mode === 'range') {
      this.control.valueChanges.pipe(
        filter(value => value[0] && value[1]),
        map(val => ({
          from: val[0],
          to: val[1]
        })),
        takeUntil(this.destroy$)
      ).subscribe(this.setRangeControlsValue.bind(this));
    }
  }

  private setRangeControlsValue(val: { from: string, to: string }): void {
    this.fromControl.setValue(val.from);
    this.toControl.setValue(val.to);
  }
}
