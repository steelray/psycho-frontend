import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthApiService, AuthService, ClientApiService, IUser } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { SnackbarService } from '@psycho/web/features';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, finalize, takeUntil, tap } from 'rxjs/operators';

@Injectable()
export class ClientProfileFacade extends WithDestroy() {
  private _passwordForm!: FormGroup;
  private _emailForm!: FormGroup;
  private _avatarForm!: FormGroup;
  readonly isLoading$ = new BehaviorSubject<boolean>(false);
  readonly changePassword$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly clientApiService: ClientApiService,
    private readonly fb: FormBuilder,
    private readonly authApiService: AuthApiService,
    private readonly authService: AuthService,
    private readonly snackbar: SnackbarService
  ) {
    super();
  }

  get clientData$(): Observable<IUser> {
    return this.clientApiService.getClientData().pipe(
      filter(data => !!data),
      tap(data => {
        this.emailForm.get('email')?.setValue(data.email)
      })
    );
  }

  get avatarForm(): FormGroup {
    if (!this._avatarForm) {
      this._avatarForm = this.fb.group({
        image: [null, RxwebValidators.image({
          maxWidth: 2000,
          maxHeight: 2000,
          minHeight: 200,
          minWidth: 200
        })]
      })
    }
    return this._avatarForm;
  }
  get emailForm(): FormGroup {
    if (!this._emailForm) {
      this._emailForm = this.fb.group({
        email: [null, [RxwebValidators.email(), RxwebValidators.required()]]
      })
    }
    return this._emailForm;
  }
  get passwordForm(): FormGroup {
    if (!this._passwordForm) {
      this._passwordForm = this.fb.group({
        current_password: [null, [
          RxwebValidators.required()
        ]],
        password: [null, [
          RxwebValidators.password({
            validation: {
              alphabet: true,
              digit: true,
              // specialCharacter: true,
              minLength: 6,
              maxLength: 16,
            }
          }),
          RxwebValidators.required()
        ]],
        repeat_password: [null, [
          RxwebValidators.compare({
            fieldName: 'password'
          }),
          RxwebValidators.required()
        ]],
      })
    }
    return this._passwordForm;
  }

  onAvatarUpload() {
    if (this.avatarForm.invalid) {
      return;
    }
    const userToken = this.authService.currentToken as string;
    this.authApiService.uploadAvatar(this.avatarForm.value?.image, userToken).then(() => {
      this.clientApiService.updateClientData();
    }).catch(error => {
      if (error.response) {
        this.snackbar.error(error.response.data)
      }
    });
  }

  onPasswordChange(): void {
    this.authApiService.updatePassword(this.passwordForm.value).subscribe(() => {
      this.snackbar.success('Ваш пароль обновлен');
      this.changePassword$.next(false);
    });
  }

  onEmailChange(): void {
    this.authApiService.setEmail(this.emailForm.value).subscribe(() => this.snackbar.success('Ваш email обновлен'));
  }

}