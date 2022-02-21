import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { AuthFacade } from '../../auth.facade';


@Component({
  selector: 'psycho-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthFacade]
})
export class ResetPasswordComponent extends WithDestroy() {

  readonly passwordResetForm = this.facade.passwordResetForm;
  readonly passwordResetRequestForm = this.facade.passwordResetRequestForm;
  smsSent$ = new BehaviorSubject<boolean>(false);
  isLoading = false;

  constructor(
    @Self() private readonly facade: AuthFacade,
    private readonly router: Router
  ) {
    super();
  }


  sendSMS(e?: Event): void {
    if (e) {
      e.preventDefault();
    }
    const phone: AbstractControl | null = this.passwordResetForm.get('phone');

    if (phone && phone.invalid) {
      return;
    }

    this.isLoading = true;

    this.facade.resetPassword(+phone?.value).pipe(
      finalize(() => this.isLoading = false),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.smsSent$.next(true);
    });
  }

  onResetRequest(): void {
    if (this.passwordResetRequestForm.invalid) {
      return;
    }
    this.isLoading = true;

    this.facade.resetPasswordRequest().pipe(
      finalize(() => this.isLoading = false),
      takeUntil(this.destroy$),
    ).subscribe(() => {

      this.router.navigate(['/profile']);
    });
  }

  goBack(): void {
    this.smsSent$.next(false);
  }

}
