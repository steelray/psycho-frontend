import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService, ClientApiService, ISelectOption, IUser } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { EMPTY, Observable, of } from 'rxjs';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { ClientNewSessionDialogComponent } from './components/client-new-session-dialog/client-new-session-dialog.component';
import { ClientPsycholigistSignDialogComponent } from './shell/client-psychologists/components/client-psycholigist-sign-dialog/client-psycholigist-sign-dialog.component';

@Injectable()
export class ClientFacade extends WithDestroy() {
  readonly userAuthData$ = this.authService.userData$;
  private _userData$!: Observable<IUser>;
  constructor(
    private readonly clientApiService: ClientApiService,
    private readonly authService: AuthService,
    private readonly dialog: MatDialog,
    private readonly router: Router
  ) {
    super();
  }

  get registrationCompleted$(): Observable<boolean> {
    return this.userData$.pipe(
      map(data => !!data?.first_name)
    );
  }

  get userData$(): Observable<IUser> {

    if (!this._userData$) {
      this._userData$ = this.clientApiService.getClientData();
    }

    return this._userData$;
  }

  get menuItems$(): Observable<ISelectOption[]> {
    return of([
      {
        title: 'Мои вопросы',
        value: ['/profile/client/consultations/express'],
        img: 'chat'
      },
      {
        title: 'Консультации 50 мин',
        value: ['/profile/client/consultations/full'],
        img: 'video'
      },
      {
        title: 'Мои психологи',
        value: ['/profile/client/psychologists'],
        img: 'favourite'
      },
    ]);
  }

  onNewSession(): void {
    this.clientApiService.getLastConsultationPsychologist().pipe(
      switchMap(res => {

        if (res?.psychologist) {
          return this.dialog.open(
            ClientNewSessionDialogComponent,
            { data: res.psychologist }
          ).afterClosed().pipe(
            filter(res => !!res),
            switchMap(() => this.dialog.open(ClientPsycholigistSignDialogComponent, {
              panelClass: 'default-dialog',
              data: res
            }).afterClosed())
          );
        }

        return EMPTY;

      }),
      takeUntil(this.destroy$)
    ).subscribe(res => {

    })

  }

}