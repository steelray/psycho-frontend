import { Component, Self } from '@angular/core';
import { IMenuItem } from '@psycho/core';
import { Observable } from 'rxjs';
import { PagesFacade } from '../pages.facade';

@Component({
  templateUrl: './pages.component.html',
  providers: [PagesFacade]
})
export class PagesComponent {
  readonly mainMenu$: Observable<IMenuItem[]> = this.facade.mainMenu$;
  readonly footerMenu$: Observable<IMenuItem[]> = this.facade.footerMenu$;
  readonly linkItems$: Observable<IMenuItem[]> = this.facade.linkItems$;
  readonly userData$: any = this.facade.userData$;
  readonly isHomePage$ = this.facade.isHomePage$;
  readonly contacts$ = this.facade.contacts$;

  constructor(
    @Self() private readonly facade: PagesFacade,
  ) {
  }

  onLogout(): void {
    this.facade.logout();
  }

}