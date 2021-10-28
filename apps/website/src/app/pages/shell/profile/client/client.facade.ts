import { Injectable } from '@angular/core';
import { AuthService, ClientApiService, ISelectOption, IUser } from '@psycho/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientFacade {
  readonly userAuthData$ = this.authService.userData$;
  private _userData$!: Observable<IUser>;
  constructor(
    private readonly clientApiService: ClientApiService,
    private readonly authService: AuthService
  ) { }

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
        value: ['/profile/questions'],
        img: 'chat'
      },
      {
        title: 'Консультации 50 мин',
        value: ['/profile/consultations'],
        img: 'video'
      },
      {
        title: 'Мои психологи',
        value: ['/profile/psychologists'],
        img: 'favourite'
      },
    ]);
  }

}