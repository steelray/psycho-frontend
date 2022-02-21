import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientApiService } from '@psycho/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'psycho-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentSuccessComponent implements OnInit {
  status$ = this.clientApi.paymentInfo(this.route.snapshot.queryParams['InvId']).pipe(
    filter(res => !!res)
  );
  constructor(
    private readonly clientApi: ClientApiService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

}
