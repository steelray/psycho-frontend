import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { CONSULTATION_FORMAT, IPsychologist } from '@psycho/core';

@Component({
  selector: 'psycho-client-profile-form-payment-conditions',
  templateUrl: './client-profile-form-payment-conditions.component.html',
  styleUrls: ['./client-profile-form-payment-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormPaymentConditionsComponent {
  @Input() psychologist!: IPsychologist;
  @Input() price = 2490;
  @Input() datetime!: number | null | undefined;
  @Input() format = CONSULTATION_FORMAT.FORMAT_FULL_CHAT;
  readonly formats = CONSULTATION_FORMAT;


  get isFullChat(): boolean {
    return [CONSULTATION_FORMAT.FORMAT_FULL_CHAT, CONSULTATION_FORMAT.FORMAT_FULL_VIDEO].includes(this.format);
  }
}
