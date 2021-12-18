import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { IPsychologist } from '@psycho/core';

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

}
