import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseFormFieldComponent } from '../../../base';;

@Component({
  selector: 'psycho-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent extends BaseFormFieldComponent {
}

