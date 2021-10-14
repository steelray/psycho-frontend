import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'psycho-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthFacade]
})
export class SignupComponent {
  readonly form = this.facade.signupForm;
  private smsSent$!: BehaviorSubject<boolean>;

  constructor(
    @Self() private readonly facade: AuthFacade
  ) { }

  get controls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  sendSMS(): void {
    const { phone } = this.form.value;
    if (!phone) {
      return;
    }

  }

}
