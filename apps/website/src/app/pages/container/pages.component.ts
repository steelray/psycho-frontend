import { Component, Self } from '@angular/core';
import { IMenuItem } from '@psycho/core';
import { Observable } from 'rxjs';
import { PagesFacade } from '../pages.facade';

@Component({
  templateUrl: './pages.component.html',
  providers: [PagesFacade]
})
export class PagesComponent {
  mainMenu$: Observable<IMenuItem[]> = this.facade.mainMenu$;

  constructor(
    @Self() private facade: PagesFacade
  ) { }

}