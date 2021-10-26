import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { ClientProfileFormFacade } from '../client-profile-form.facade';

@Component({
  selector: 'psycho-client-profile-form',
  templateUrl: './client-profile-form.component.html',
  styleUrls: ['./client-profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientProfileFormFacade]
})
export class ClientProfileFormComponent {
  readonly formatForm = this.facade.formatForm;
  readonly commonQuestionsForm = this.facade.commonQuestionsForm;
  readonly subjectsForm = this.facade.subjectsForm;
  readonly specialistForm = this.facade.specialistForm;
  readonly datetimeForm = this.facade.datetimeForm;
  readonly scheduleForm = this.facade.scheduleForm;
  readonly yearsOptions = this.facade.yearsOptions;
  readonly subjects$ = this.facade.subjects$;
  readonly psychologists$ = this.facade.psychologists$;
  readonly selectedPsychologist$ = this.facade.selectedPsychologist$;
  readonly selectedPsychologistGroupedSchedule$ = this.facade.selectedPsychologistGroupedSchedule$;
  isSaving = false;

  constructor(
    private readonly facade: ClientProfileFormFacade,
    private readonly cdRef: ChangeDetectorRef
  ) {
  }

  onCompleteRegistration(stepper: any): void {
    this.isSaving = true;
    this.facade.onCompleteRegistration().pipe(
      tap(() => this.cdRef.markForCheck()),
    ).subscribe(() => {
      stepper.next();
      this.isSaving = false;
      this.cdRef.detectChanges();
    });
  }

}
