import { Component, ChangeDetectionStrategy, Self } from '@angular/core';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'psycho-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeFacade]
})
export class HomeComponent {
  readonly subjects$ = this.facade.subjects$;
  readonly psychologists$ = this.facade.psychologists$;
  readonly faq$ = this.facade.faq$;

  constructor(
    @Self() private facade: HomeFacade
  ) { }
}
