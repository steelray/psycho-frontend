import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginForm!: FormGroup;
  private _signupForm!: FormGroup;

  private readonly lsTokenKey = '__psychoLsTK';
  private readonly _token$ = new BehaviorSubject<string | null>(this.lsToken);

  constructor(
    private readonly window: WindowService,
    private fb: FormBuilder
  ) { }

  get isAuthed$(): Observable<boolean> {
    return this._token$.asObservable().pipe(
      map(token => !!token)
    );
  }

  get token$(): Observable<string | null> {
    return this._token$.asObservable();
  }

  saveToken(token: string): void {
    this.window.localStorage.setItem(this.lsTokenKey, token);
    this._token$.next(token);
  }

  logout(): void {
    this.window.localStorage.removeItem(this.lsTokenKey);
    this._token$.next(null);
  }

  private get lsToken(): string | null {
    return this.window.localStorage.getItem(this.lsTokenKey);
  }

  get loginForm(): FormGroup {
    if (!this._loginForm) {
      this._loginForm = this.buildLoginForm();
    }
    return this._loginForm;
  }

  get signupForm(): FormGroup {
    if (!this._signupForm) {
      this._signupForm = this.buildSignupForm();
    }
    return this._signupForm;
  }


  private buildLoginForm(): FormGroup {
    return this.fb.group({
      username: [null, [RxwebValidators.required()]],
      password: [null, RxwebValidators.required()]
    });
  }

  private buildSignupForm(): FormGroup {
    return this.fb.group({
      phone: [null, [RxwebValidators.required(), RxwebValidators.numeric()]],
      code: [null, [
        RxwebValidators.required(),
        RxwebValidators.maxLength({ value: 6 }),
        RxwebValidators.minLength({ value: 6 })
      ]],
      password: [null, [
        RxwebValidators.required(),
        RxwebValidators.password({
          validation: {
            alphabet: true,
            digit: true,
            specialCharacter: true,
            minLength: 6,
            maxLength: 16,
            upperCase: true,
            lowerCase: true
          }
        })
      ]],
      password_repeat: [null, [
        RxwebValidators.compare({
          fieldName: 'password'
        })
      ]]
    });
  }

}