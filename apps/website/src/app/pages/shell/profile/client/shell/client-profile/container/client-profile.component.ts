import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClientProfileFacade } from '../client-profile.facade';

@Component({
  selector: 'psycho-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientProfileFacade]
})
export class ClientProfileComponent {
  readonly clientData$ = this.facade.clientData$;
  readonly avatarForm = this.facade.avatarForm;
  readonly emailForm = this.facade.emailForm;
  readonly passwordForm = this.facade.passwordForm;
  readonly isLoading$ = this.facade.isLoading$;
  avatarPreview!: string;

  changePassword = false;

  constructor(
    private readonly facade: ClientProfileFacade
  ) {
  }

  onPasswordChange(): void {
    this.facade.onPasswordChange();
  }

  togglePasswordFields(): void {
    this.changePassword = !this.changePassword;
  }

  onAvatarUpload(event: any): void {
    const file = event?.target?.files[0];
    if (file) {
      // this.avatarPreview = URL.createObjectURL(file);
      this.avatarForm.get('image')?.setValue(file);
      this.facade.onAvatarUpload();
    }
  }

  onEmailChange(): void {
    this.facade.onEmailChange();
  }

}
