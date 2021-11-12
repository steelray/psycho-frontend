import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { IUserAuthData } from '@psycho/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginForm!: FormGroup;
  private _signupForm!: FormGroup;
  private _psychologistLoginForm!: FormGroup;

  private readonly lsUserDataKey = '__psychoLsData';
  private readonly _userData$ = new BehaviorSubject<IUserAuthData | null>(this.lsUserData);

  constructor(
    private readonly windowService: WindowService,
    private readonly fb: FormBuilder
  ) { }

  get isAuthed$(): Observable<boolean> {
    return this._userData$.asObservable().pipe(
      map(data => !!data)
    );
  }

  get userData$(): Observable<IUserAuthData | null> {
    return this._userData$.asObservable();
  }

  get currentToken(): string | undefined {
    return this._userData$.getValue()?.token;
  }

  saveUserData(userData: IUserAuthData): void {
    this.windowService.localStorage.setItem(this.lsUserDataKey, JSON.stringify(userData));
    this._userData$.next(userData);
  }

  logout(): void {
    this.windowService.localStorage.removeItem(this.lsUserDataKey);
    this._userData$.next(null);
  }

  private get lsUserData(): IUserAuthData | null {
    const lsData = this.windowService.localStorage.getItem(this.lsUserDataKey) || null;
    return lsData ? JSON.parse(lsData) : null;
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
          RxwebValidators.maxLength({ value: 6 }),
          RxwebValidators.minLength({ value: 6 })
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


}