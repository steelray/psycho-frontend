import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClientFacade } from '../client.facade';

@Component({
  selector: 'psycho-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientFacade]
})
export class ClientComponent {
  readonly registrationCompleted$ = this.facade.registrationCompleted$;
  readonly userData$ = this.facade.userData$;
  readonly menuItems$ = this.facade.menuItems$;
  readonly userAuthData$ = this.facade.userAuthData$;
  constructor(
    private readonly facade: ClientFacade
  ) { }

}
