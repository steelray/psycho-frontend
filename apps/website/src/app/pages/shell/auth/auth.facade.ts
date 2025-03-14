import { Injectable } from '@angular/core';
import { AuthApiService, AuthService, IUserAuthData } from '@psycho/core';
import { Observable, of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class AuthFacade {
  readonly loginForm = this.authService.loginForm;
  readonly psychologistLoginForm = this.authService.psychologistLoginForm;
  readonly signupForm = this.authService.signupForm;
  readonly passwordResetForm = this.authService.passwordResetForm;
  readonly passwordResetRequestForm = this.authService.passwordResetRequestForm;

  constructor(
    private readonly authApiService: AuthApiService,
    private readonly authService: AuthService
  ) {

  }


  userLogin(): Observable<any> {
    if (this.loginForm.invalid) {
      return of(null);
    }
    const { phone, password } = this.loginForm.value;

    return this.authApiService.login(phone, password).pipe(
      filter(data => !!data),
      tap(data => this.authService.saveUserData(data))
    );
  }

  psychologistLogin(): Observable<IUserAuthData | null> {
    if (this.psychologistLoginForm.invalid) {
      return of(null);
    }
    const { email, password } = this.psychologistLoginForm.value;
    return this.authApiService.login(email, password).pipe(
      filter(data => !!data),
      tap(data => this.authService.saveUserData(data))
    );
  }

  sendSms(phone: number): Observable<boolean> {
    return this.authApiService.sendSMS(phone);
  }

  signup(): Observable<any> {
    if (this.signupForm.invalid) {
      return of(null);
    }
    return this.authApiService.signup(this.signupForm.value).pipe(
      filter(data => !!data),
      tap(data => this.authService.saveUserData(data))
    );
  }

  resetPassword(phone: number): Observable<IUserAuthData> {
    return this.authApiService.resetPassword(phone).pipe(
      tap(res => this.authService.saveUserData(res))
    );
  }

  resetPasswordRequest(): Observable<any> {
    if (this.passwordResetRequestForm.invalid) {
      return of(null);
    }
    const { code, password, repeat_password } = this.passwordResetRequestForm.value;
    return this.authApiService.resetPasswordRequest(code, password, repeat_password).pipe(
      filter(data => !!data),
      tap(data => this.authService.saveUserData(data))
    );
  }


}