import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService, IMenuItem, MenuApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, startWith, tap } from 'rxjs/operators';

@Injectable()
export class PagesFacade {
  private _mainMenu$!: Observable<IMenuItem[]>;

  constructor(
    private readonly menuService: MenuApiService,
    private readonly authService: AuthService,
    private readonly router: Router

  ) {
    // this.registerWSUserHandler();

    // this.wsService.onMessage$.subscribe(res => console.log(res));
  }

  get isHomePage$(): Observable<boolean> {
    return this.router.events.pipe(
      startWith(this.router.url === '/'),
      filter(event => event === true || event instanceof NavigationEnd),
      map(event => event === true ? { url: '/' } : event),
      map((event: any) => event?.url === '/')
    )
  }

  get mainMenu$(): Observable<IMenuItem[]> {

    if (!this._mainMenu$) {
      this._mainMenu$ = this.menuService.getMenu('main-menu').pipe(
        tap(console.log),
        shareReplay()
      );
    }

    return this._mainMenu$;
  }

  get userData$(): Observable<any> {
    return this.authService.userData$.pipe(
      tap(console.log)
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}