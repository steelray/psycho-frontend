import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageFacade } from '../page.facade';

@Component({
  selector: 'psycho-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PageFacade]
})
export class PageComponent {
  readonly page$ = this.facade.page$;
  constructor(
    private readonly facade: PageFacade
  ) { }
}
