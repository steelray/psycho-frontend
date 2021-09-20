import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseFormFieldComponent } from '@psycho/web/core';
import { combineLatest } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';



@Component({
  selector: 'pb-range-datepicker',
  templateUrl: './range-datepicker.component.html',
  styleUrls: ['./range-datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RangeDatepickerComponent extends BaseFormFieldComponent implements OnInit {
  @Input() startControl = new FormControl();
  @Input() endControl = new FormControl();
  @Input() startPlaceholder = 'с';
  @Input() endPlaceholder = 'по';
  @Input() min!: Date; // min valid date
  @Input() max!: Date; // max valid date
  @Input() maxRange = 365 * 10; // max range days
  @Output() datesSelected = new EventEmitter();


  ngOnInit(): void {
    super.ngOnInit();

    combineLatest([
      this.startControl.valueChanges,
      this.endControl.valueChanges
    ]).pipe(
      filter(data => data[0] && data[1]),
      takeUntil(this.destroy$)
    ).subscribe(() => this.datesSelected.emit());

  }

}
