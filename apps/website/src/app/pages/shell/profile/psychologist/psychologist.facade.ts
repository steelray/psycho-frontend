import { Injectable } from '@angular/core';
import { AuthService, ISelectOption, IUser, PsychologistApiService } from '@psycho/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PsychologistFacade {
  readonly userAuthData$ = this.authService.userData$;
  private _userData$!: Observable<IUser>;
  constructor(
    private readonly psychologistApiService: PsychologistApiService,
    private readonly authService: AuthService
  ) { }

  get userData$(): Observable<IUser> {

    if (!this._userData$) {
      this._userData$ = this.psychologistApiService.getProfile();
    }

    return this._userData$;
  }

  get menuItems$(): Observable<ISelectOption[]> {
    return of([
      {
        title: 'Экспресс-консультации',
        value: ['/profile/psychologist/express-chat'],
        img: 'chat'
      },
      {
        title: 'Консультации 50 мин',
        value: ['/profile/psychologist/consultations'],
        img: 'video'
      },
      {
        title: 'Задать расписание',
        value: ['/profile/psychologist/set-schedule'],
        img: 'favourite'
      },
      {
        title: 'Финансы',
        value: ['/profile/psychologist/finances'],
        img: 'favourite'
      },
    ]);
  }
}