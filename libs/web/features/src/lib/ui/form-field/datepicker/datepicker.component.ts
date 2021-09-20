import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseFormFieldComponent } from '@psycho/web/core';

@Component({
  selector: 'pb-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent extends BaseFormFieldComponent {
}

