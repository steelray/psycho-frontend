import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject, of } from 'rxjs';
import { filter, finalize, takeUntil } from 'rxjs/operators';
import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'psycho-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthFacade]
})
export class SignupComponent extends WithDestroy() {
  readonly form = this.facade.signupForm;
  smsSent$ = new BehaviorSubject<boolean>(false);
  isLoading = false;

  constructor(
    @Self() private readonly facade: AuthFacade,
    private readonly router: Router
  ) {
    super();
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  sendSMS(e?: Event): void {
    if (e) {
      e.preventDefault();
    }
    const phone: AbstractControl | null = this.form.get('phone');

    if (phone && phone.invalid) {
      return;
    }

    this.isLoading = true;

    this.facade.sendSms(+phone?.value).pipe(
      finalize(() => this.isLoading = false),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.smsSent$.next(true);
    });
  }

  onSignup(): void {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    this.facade.signup().pipe(
      finalize(() => this.isLoading = false),
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.router.navigate(['/profile/settings']);
    });
  }

}
