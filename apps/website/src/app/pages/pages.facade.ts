import { Injectable } from '@angular/core';
import { IMenuItem, MenuApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class PagesFacade {
  private _mainMenu$!: Observable<IMenuItem[]>
  constructor(
    private menuService: MenuApiService
  ) { }

  get mainMenu$(): Observable<IMenuItem[]> {

    if (!this._mainMenu$) {
      this._mainMenu$ = this.menuService.getMenu('main-menu').pipe(
        shareReplay()
      );
    }

    return this._mainMenu$;
  }

}