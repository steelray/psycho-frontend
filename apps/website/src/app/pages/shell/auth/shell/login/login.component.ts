import { Component, ChangeDetectionStrategy, Self } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PHONE_MASK } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { takeUntil } from 'rxjs/operators';
import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'psycho-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthFacade]
})
export class LoginComponent extends WithDestroy() {
  readonly phoneMask = PHONE_MASK;
  readonly form = this.facade.loginForm;
  isLoading = false;
  constructor(
    @Self() private readonly facade: AuthFacade,
    private router: Router
  ) {
    super();
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.isLoading = true;
    this.facade.login().pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/profile']);
    });
  }



}
