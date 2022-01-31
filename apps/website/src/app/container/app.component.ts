import { Platform } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, PLATFORM_ID, Self } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService, HttpErrorService, ScriptService, SeoService, WindowService, WSService, WS_COMMANDS } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { SnackbarService } from '@psycho/web/features';
import { filter, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'psycho-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SnackbarService]
})
export class AppComponent extends WithDestroy() implements OnDestroy {
  constructor(
    @Self() private readonly snackbar: SnackbarService,
    private readonly errorService: HttpErrorService,
    private readonly ws: WSService,
    private readonly authService: AuthService,
    private readonly seoService: SeoService,
    protected readonly router: Router,
    private readonly platform: Platform,
    @Inject(PLATFORM_ID) private readonly platformId: string,
    private readonly scriptService: ScriptService

  ) {
    super();
    this.errorService.error$.pipe(
      filter(res => !!res),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      if (res) {
        this.snackbar.error(res);
      }
    });

    this.authService.userData$.pipe(
      filter(data => !!data),
      switchMap(data => this.ws.afterOpen$.pipe(
        filter(res => !!res),
        tap(() => {
          return this.ws.sendMessage({
            command: WS_COMMANDS.REGISTER,
            user: data?.id as number
          });
        })
      )),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.scriptService.load('zoom1', 'zoom2', 'zoom3', 'zoom4', 'zoom5', 'zoom6').then(data => {
        console.log('script loaded ', data);
      }).catch(error => console.log(error));
    });

    this.getSeo();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      if (isPlatformBrowser(platformId)) {
        window.scrollTo(0, 0);
      }
    });

  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.ws.onComplete();
  }

  getSeo(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        switchMap(() => this.seoService.getSeo()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

}
