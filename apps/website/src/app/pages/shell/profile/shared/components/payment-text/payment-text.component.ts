import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'psycho-payment-text',
  templateUrl: './payment-text.component.html',
  styleUrls: ['./payment-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTextComponent {
  @Input() price!: number;

}
