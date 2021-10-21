import { Injectable } from '@angular/core';
import { AuthService, IMenuItem, MenuApiService, WSService } from '@psycho/core';
import { Observable } from 'rxjs';
import { filter, shareReplay, switchMap } from 'rxjs/operators';

@Injectable()
export class PagesFacade {
  private _mainMenu$!: Observable<IMenuItem[]>;

  constructor(
    private readonly menuService: MenuApiService,
    private readonly authService: AuthService,
    private readonly wsService: WSService
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
    return this.authService.userData$;
  }

  // get unreadMessages(): Observable<number> {

  //   return this.authService.userData$.pipe(
  //     filter(data => !!data),
  //     switchMap(data => this.wsService.afterOpen$),
  //     switchMap(() => this.wsService.sendMessage({

  //     }))
  //   )
  // }

  logout(): void {
    this.authService.logout();
  }

}