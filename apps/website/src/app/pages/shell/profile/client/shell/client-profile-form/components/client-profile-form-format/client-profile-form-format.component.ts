import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CONSULTATION_FORMAT, CONSULTATION_FORMAT_PRICE } from '@psycho/core';

@Component({
  selector: 'psycho-client-profile-form-format',
  templateUrl: './client-profile-form-format.component.html',
  styleUrls: ['./client-profile-form-format.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormFormatComponent {
  @Input() form!: FormGroup;
  readonly formats = CONSULTATION_FORMAT;
  readonly prices = CONSULTATION_FORMAT_PRICE;
  selectedFormat!: CONSULTATION_FORMAT | -1;
  parentFormatSelected = false;

  onFormatSelect(format: CONSULTATION_FORMAT | -1): void {
    if (format === -1 || format !== this.formats.FORMAT_EXPRESS) {
      this.parentFormatSelected = true;
      this.selectedFormat = format;
    } else {
      this.parentFormatSelected = false;
      this.selectedFormat = format;
    }
    this.form.get('format')?.setValue(format !== -1 ? format : null);
  }
}
