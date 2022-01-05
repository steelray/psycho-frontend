import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CONSULTATION_FORMAT } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { takeUntil } from 'rxjs/operators';
import { NewSessionFacade } from '../new-session.facade';

@Component({
  selector: 'psycho-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NewSessionFacade]
})
export class NewSessionComponent extends WithDestroy() {
  readonly formatForm = this.facade.formatForm;
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
  isEditable = true;
  isSaving = false;

  constructor(
    private readonly facade: NewSessionFacade,
    private readonly cdRef: ChangeDetectorRef
  ) {
    super();
  }

  onCompleteRegistration(stepper: any): void {
    this.isSaving = true;
    this.facade.sign().pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      stepper.next();
      this.isEditable = false;
      this.isSaving = false;
      this.cdRef.detectChanges();
    });
  }


}
