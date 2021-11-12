import { Component, ChangeDetectionStrategy, Self, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserAuthData, PHONE_MASK } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map, takeUntil } from 'rxjs/operators';
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
  readonly isLoading$ = new BehaviorSubject<boolean>(false);
  constructor(
    @Self() private readonly facade: AuthFacade,
    private router: Router,
    private readonly cdRef: ChangeDetectorRef,
    private readonly activatedRoute: ActivatedRoute
  ) {
    super();
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get form$(): Observable<FormGroup> {
    return this.activatedRoute.queryParams.pipe(
      map(params => params.psychologist),
      map(res => res ? this.facade.psychologistLoginForm : this.facade.loginForm)
    )
  }

  onSubmit(): void {
    this.isLoading$.next(true);
    this.request.pipe(
      finalize(() => {
        this.isLoading$.next(false);
      }),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

  private get request(): Observable<IUserAuthData> {
    return this.activatedRoute.snapshot.queryParams['psychologist']
      ? this.facade.psychologistLogin()
      : this.facade.userLogin();
  }



}
