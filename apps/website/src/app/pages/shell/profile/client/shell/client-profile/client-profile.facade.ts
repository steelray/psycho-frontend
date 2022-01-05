import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthApiService, AuthService, ClientApiService, IUser } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { SnackbarService } from '@psycho/web/features';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ProfileSharedForms } from '../../../shared/services/profile-shared-forms.service';

@Injectable()
export class ClientProfileFacade extends WithDestroy() {
  private _passwordForm!: FormGroup;
  private _emailForm!: FormGroup;
  private _avatarForm!: FormGroup;
  readonly isLoading$ = new BehaviorSubject<boolean>(false);
  readonly changePassword$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly clientApiService: ClientApiService,
    private readonly authApiService: AuthApiService,
    private readonly authService: AuthService,
    private readonly snackbar: SnackbarService,
    private readonly profileSharedForms: ProfileSharedForms
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
      this._avatarForm = this.profileSharedForms.avatarForm;
    }
    return this._avatarForm;
  }
  get emailForm(): FormGroup {
    if (!this._emailForm) {
      this._emailForm = this.profileSharedForms.emailForm;
    }
    return this._emailForm;
  }
  get passwordForm(): FormGroup {
    if (!this._passwordForm) {
      this._passwordForm = this.profileSharedForms.passwordForm;
    }
    return this._passwordForm;
  }

  onAvatarUpload() {
    if (this.avatarForm.invalid) {
      return;
    }
    const userToken = this.authService.currentToken as string;
    this.authApiService.uploadAvatar(this.avatarForm.value?.image, userToken).then(res => {
      this.clientApiService.updateClientData();
      this.authService.updateUserData({ avatar: res.data })
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