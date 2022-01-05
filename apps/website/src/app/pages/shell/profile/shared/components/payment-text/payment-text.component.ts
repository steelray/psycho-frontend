import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CONSULTATION_FORMAT } from '@psycho/core';

@Component({
  selector: 'psycho-payment-text',
  templateUrl: './payment-text.component.html',
  styleUrls: ['./payment-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTextComponent {
  @Input() price!: number;
  @Input() format: CONSULTATION_FORMAT = CONSULTATION_FORMAT.FORMAT_FULL_CHAT;

  readonly formats = CONSULTATION_FORMAT;
}
