import { Component, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { CONSULTATION_FORMAT, IClientConsultation } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NewSessionFacade } from '../new-session.facade';

@Component({
  selector: 'psycho-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NewSessionFacade]
})
export class NewSessionComponent extends WithDestroy() implements OnChanges, AfterViewChecked {
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
  readonly newConsultation$ = new BehaviorSubject<IClientConsultation | null>(null);
  isEditable = true;
  isSaving = false;

  constructor(
    private readonly facade: NewSessionFacade,
    private readonly cdRef: ChangeDetectorRef
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewChecked(): void {
    console.log('checked');

  }

  onCompleteRegistration(stepper: any): void {
    this.isSaving = true;
    this.facade.sign().pipe(
      takeUntil(this.destroy$)
    ).subscribe(newConsultation => {
      stepper.next();
      this.newConsultation$.next(newConsultation);
      this.isEditable = false;
      this.isSaving = false;
      this.cdRef.detectChanges();
    });
  }


}
