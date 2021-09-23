import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseFormFieldComponent } from '../../../base';;

@Component({
  selector: 'psycho-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent extends BaseFormFieldComponent {
  @Input() rows = 6;
}
