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
        subtitle: 'Экспресс',
        value: ['/profile/psychologist/consultations/express'],
        img: 'chat'
      },
      {
        title: 'Консультации 50 мин',
        subtitle: '50 мин',
        value: ['/profile/psychologist/consultations/full'],
        img: 'video'
      },
      {
        title: 'Задать расписание',
        subtitle: 'Расписание',
        value: ['/profile/psychologist/set-schedule'],
        img: 'favourite'
      },
      {
        title: 'Финансы',
        subtitle: 'Финансы',
        value: ['/profile/psychologist/finances'],
        img: 'favourite'
      },
    ]);
  }
}