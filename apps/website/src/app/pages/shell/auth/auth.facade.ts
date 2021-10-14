import { Injectable } from '@angular/core';
import { AuthApiService, AuthService } from '@psycho/core';
import { getFullNumber } from '@psycho/utils';
import { Observable, of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class AuthFacade {
  readonly loginForm = this.authService.loginForm;
  readonly signupForm = this.authService.signupForm;

  constructor(
    private readonly authApiService: AuthApiService,
    private readonly authService: AuthService
  ) { }


  login(): Observable<any> {
    if (this.loginForm.invalid) {
      return of(null);
    }

    const { phone, password } = this.loginForm.value;
    const formatedPhoneNumber = getFullNumber(phone);

    return this.authApiService.login(formatedPhoneNumber, password).pipe(
      filter(token => !!token),
      tap(token => this.authService.saveToken(token))
    );
  }

  sendSms(phone: number): Observable<string> {
    return this.authApiService.sendSMS(phone);
  }


}