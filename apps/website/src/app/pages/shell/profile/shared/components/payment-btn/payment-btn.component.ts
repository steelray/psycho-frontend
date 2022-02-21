import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ClientApiService, WindowService } from '@psycho/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'psycho-payment-btn',
  templateUrl: './payment-btn.component.html',
  styleUrls: ['./payment-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentBtnComponent implements OnInit {
  @Input() consultationId!: number;
  constructor(
    private readonly clientApi: ClientApiService,
    private readonly window: WindowService
  ) { }

  ngOnInit(): void {
  }

  onPayment(): void {
    this.clientApi.payment(this.consultationId).pipe(
      filter(res => !!res)
    ).subscribe(res => {
      this.window.location.href = res;
    });
  }

}
