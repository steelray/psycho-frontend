import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService, CommonDataApiService, IContacts, IMenuItem, MenuApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, startWith, tap } from 'rxjs/operators';

@Injectable()
export class PagesFacade {
  private _mainMenu$!: Observable<IMenuItem[]>;
  private _footerMenu$!: Observable<IMenuItem[]>;
  private _linkItems$!: Observable<IMenuItem[]>;
  private _contacts$!: Observable<IContacts>;

  constructor(
    private readonly menuService: MenuApiService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly commonDataApiService: CommonDataApiService

  ) {
  }

  get isHomePage$(): Observable<boolean> {
    return this.router.events.pipe(
      startWith(this.router.url === '/'),
      filter(event => event === true || event instanceof NavigationEnd),
      map(event => event === true ? { url: '/' } : event),
      map((event: any) => event?.url === '/')
    )
  }

  get isAuthPage$(): Observable<boolean> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: any) => event.url.split('/')[1]),
      map(res => !!res || res === 'auth')
    );
  }
  get isProfilePage$(): Observable<boolean> {
    return this.router.events.pipe(
      startWith(true),
      filter(event => event === true || event instanceof NavigationEnd),
      map(event => event === true ? this.router : event),
      map((event: any) => event.url.split('/')[1]),
      map(res => res === 'profile'),
      tap(res => console.log(res))
    );
  }

  get mainMenu$(): Observable<IMenuItem[]> {

    if (!this._mainMenu$) {
      this._mainMenu$ = this.menuService.getMenu('main-menu').pipe(
        shareReplay()
      );
    }

    return this._mainMenu$;
  }

  get footerMenu$(): Observable<IMenuItem[]> {
    if (!this._footerMenu$) {
      this._footerMenu$ = this.menuService.getMenu('menu-v-podvale').pipe(
        shareReplay()
      );
    }

    return this._footerMenu$;
  }

  get linkItems$(): Observable<IMenuItem[]> {
    if (!this._linkItems$) {
      this._linkItems$ = this.menuService.getMenu('footer-links').pipe(
        shareReplay()
      );
    }

    return this._linkItems$;
  }

  get contacts$(): Observable<IContacts> {
    if (!this._contacts$) {
      this._contacts$ = this.commonDataApiService.contacts$.pipe(
        shareReplay()
      );
    }

    return this._contacts$;
  }

  get userData$(): Observable<any> {
    return this.authService.userData$.pipe(
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}