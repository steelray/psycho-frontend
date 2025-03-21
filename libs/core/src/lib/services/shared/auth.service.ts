import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, filter, map, switchMap, take, takeUntil, tap, timestamp } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { IUser, IUserAuthData, WSService } from '@psycho/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginForm!: FormGroup;
  private _signupForm!: FormGroup;
  private _psychologistLoginForm!: FormGroup;

  private readonly lsUserDataKey = '__psychoLsData';
  private readonly _userData$ = new BehaviorSubject<IUserAuthData | null>(this.lsUserData);

  private readonly wsSubscription$ = new Subject();

  constructor(
    private readonly windowService: WindowService,
    private readonly fb: FormBuilder
  ) {
  }

  get isAuthed$(): Observable<boolean> {
    return this._userData$.asObservable().pipe(
      map(data => !!data)
    );
  }

  get userData$(): Observable<IUserAuthData | null> {
    return this._userData$.asObservable();
  }

  get userData(): IUserAuthData | null {
    return this._userData$.getValue();
  }

  get currentToken(): string | undefined {
    return this._userData$.getValue()?.token;
  }

  updateUserData(data: IUserAuthData): void {
    this.saveUserData({ ...this.userData, ...data })
  }

  saveUserData(userData: IUserAuthData): void {
    if (this.windowService?.localStorage) {
      this.windowService.localStorage.setItem(this.lsUserDataKey, JSON.stringify(userData));
      this._userData$.next(userData);

    }
  }

  logout(): void {
    if (this.windowService?.localStorage) {
      this.windowService.localStorage.removeItem(this.lsUserDataKey);
      this._userData$.next(null);
    }
  }

  private get lsUserData(): IUserAuthData | null {
    if (this.windowService?.localStorage) {

      const lsData = this.windowService.localStorage.getItem(this.lsUserDataKey) || null;
      return lsData ? JSON.parse(lsData) : null;
    }
    return null;
  }

  get loginForm(): FormGroup {
    if (!this._loginForm) {
      this._loginForm = this.fb.group({
        phone: [null, [RxwebValidators.required()]],
        password: [null, RxwebValidators.required()]
      });
    }
    return this._loginForm;
  }

  get psychologistLoginForm(): FormGroup {
    if (!this._psychologistLoginForm) {
      this._psychologistLoginForm = this.fb.group({
        email: [null, [RxwebValidators.required(), RxwebValidators.email()]],
        password: [null, RxwebValidators.required()]
      });
    }
    return this._psychologistLoginForm;
  }

  get signupForm(): FormGroup {
    if (!this._signupForm) {
      this._signupForm = this.fb.group({
        phone: [null, [RxwebValidators.required(), RxwebValidators.numeric()]],
        code: [null, [
          RxwebValidators.required(),
          RxwebValidators.maxLength({ value: 4 }),
          RxwebValidators.minLength({ value: 4 })
        ]],
        password: [null, [
          RxwebValidators.required(),
          RxwebValidators.password({
            validation: {
              alphabet: true,
              digit: true,
              // specialCharacter: true,
              minLength: 6,
              maxLength: 16,
            }
          })
        ]],
        repeat_password: [null, [
          RxwebValidators.compare({
            fieldName: 'password'
          })
        ]]
      });
    }
    return this._signupForm;
  }

  get passwordResetForm(): FormGroup {
    return this.fb.group({
      phone: [null, [RxwebValidators.required(), RxwebValidators.numeric()]],
    });
  }

  get passwordResetRequestForm(): FormGroup {
    return this.fb.group({
      code: [null, [
        RxwebValidators.required(),
        RxwebValidators.maxLength({ value: 4 }),
        RxwebValidators.minLength({ value: 4 })
      ]],
      password: [null, [
        RxwebValidators.required(),
        RxwebValidators.password({
          validation: {
            alphabet: true,
            digit: true,
            // specialCharacter: true,
            minLength: 6,
            maxLength: 16,
          }
        })
      ]],
      repeat_password: [null, [
        RxwebValidators.compare({
          fieldName: 'password'
        })
      ]]
    });
  }


}