import { Component, Self } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@psycho/core';
import { Observable } from 'rxjs';
import { PagesFacade } from '../pages.facade';

@Component({
  templateUrl: './pages.component.html',
  providers: [PagesFacade]
})
export class PagesComponent {
  readonly mainMenu$: Observable<IMenuItem[]> = this.facade.mainMenu$;
  readonly userData$: any = this.facade.userData$;
  constructor(
    @Self() private readonly facade: PagesFacade,
    private readonly router: Router
  ) { }

  onLogout(): void {
    this.facade.logout();
    this.router.navigate(['/']);
  }

}