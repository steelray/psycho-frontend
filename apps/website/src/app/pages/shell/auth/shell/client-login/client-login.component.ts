import { Component, ChangeDetectionStrategy, Self } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PHONE_MASK } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject } from 'rxjs';
import { catchError, finalize, takeUntil } from 'rxjs/operators';
import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'psycho-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthFacade]
})
export class ClientLoginComponent extends WithDestroy() {
  readonly phoneMask = PHONE_MASK;
  readonly form = this.facade.loginForm;
  isLoading$ = new BehaviorSubject<boolean>(false);
  constructor(
    @Self() private readonly facade: AuthFacade,
    private readonly router: Router
  ) {
    super();
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  onSubmit(): void {
    console.log(this.form.value);

    this.isLoading = true;
    this.facade.userLogin().pipe(
      finalize(() => {
        this.isLoading$.next(false)
      }),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }


}
