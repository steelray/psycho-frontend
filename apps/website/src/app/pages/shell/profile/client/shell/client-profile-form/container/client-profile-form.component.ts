import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CONSULTATION_FORMAT, IClientConsultation } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ClientProfileFormFacade } from '../client-profile-form.facade';

@Component({
  selector: 'psycho-client-profile-form',
  templateUrl: './client-profile-form.component.html',
  styleUrls: ['./client-profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientProfileFormFacade]
})
export class ClientProfileFormComponent extends WithDestroy() {
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
  readonly formats = CONSULTATION_FORMAT;
  readonly newConsultation$ = new BehaviorSubject<IClientConsultation | null>(null);
  isEditable = true;
  isSaving = false;

  constructor(
    private readonly facade: ClientProfileFormFacade,
    private readonly cdRef: ChangeDetectorRef
  ) {
    super();
  }

  onCompleteRegistration(stepper: any): void {
    this.isSaving = true;
    this.facade.onCompleteRegistration().pipe(
      takeUntil(this.destroy$)
    ).subscribe(newConsultation => {
      this.newConsultation$.next(newConsultation);
      stepper.next();
      this.isEditable = false;
      this.isSaving = false;
      this.cdRef.detectChanges();
    });
  }

}
