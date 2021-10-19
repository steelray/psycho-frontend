import { Injectable } from '@angular/core';
import { AuthApiService, AuthService, IMenuItem, MenuApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';

@Injectable()
export class PagesFacade {
  private _mainMenu$!: Observable<IMenuItem[]>;
  private readonly _userData$!: Observable<any>;
  constructor(
    private menuService: MenuApiService,
    private authService: AuthService,
    private authApiService: AuthApiService
  ) { }

  get mainMenu$(): Observable<IMenuItem[]> {

    if (!this._mainMenu$) {
      this._mainMenu$ = this.menuService.getMenu('main-menu').pipe(
        shareReplay()
      );
    }

    return this._mainMenu$;
  }

  get userData$(): Observable<any> {
    return this.authService.isAuthed$;
  }

  logout(): void {
    this.authService.logout();
  }

}