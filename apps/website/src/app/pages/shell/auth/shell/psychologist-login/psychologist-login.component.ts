import { Component, ChangeDetectionStrategy, Self } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WithDestroy } from '@psycho/utils';
import { finalize, takeUntil } from 'rxjs/operators';
import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'psycho-psychologist-login',
  templateUrl: './psychologist-login.component.html',
  styleUrls: ['./psychologist-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthFacade]
})
export class PsychologistLoginComponent extends WithDestroy() {
  readonly form = this.facade.psychologistLoginForm;
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


  onSubmit(): void {
    this.isLoading = true;
    this.facade.psychologistLogin().pipe(
      finalize(() => {
        this.isLoading = false;
      }),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

}
