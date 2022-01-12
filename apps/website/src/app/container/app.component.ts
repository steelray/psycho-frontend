import { ChangeDetectionStrategy, Component, OnDestroy, Self } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService, HttpErrorService, SeoService, WSService, WS_COMMANDS } from '@psycho/core';
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
    protected readonly router: Router

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
    ).subscribe();

    this.getSeo();

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
