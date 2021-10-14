import { Component, ChangeDetectionStrategy, Self } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PHONE_MASK } from '@psycho/core';
import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'psycho-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthFacade]
})
export class LoginComponent {
  readonly phoneMask = PHONE_MASK;
  readonly form = this.facade.loginForm;
  constructor(
    @Self() private readonly facade: AuthFacade
  ) { }

  get controls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }



}
