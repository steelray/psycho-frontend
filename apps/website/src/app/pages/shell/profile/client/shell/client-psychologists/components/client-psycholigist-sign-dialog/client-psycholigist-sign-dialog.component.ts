import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CONSULTATION_FORMAT, CONSULTATION_FORMAT_PRICE, IGroupedScheduleTime, IPsychologist, ISubject, WindowService } from '@psycho/core';
import { monthsOptions, yearOptions } from '@psycho/utils';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientPsychologistsFacade, CLIENT_PSYCHOLOGIST_SIGN_STEPS } from '../../client-psychologists.facade';

@Component({
  selector: 'psycho-client-psycholigist-sign-dialog',
  templateUrl: './client-psycholigist-sign-dialog.component.html',
  styleUrls: ['./client-psycholigist-sign-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientPsychologistsFacade]
})
export class ClientPsycholigistSignDialogComponent {
  readonly currentSignStep$ = this.facade.currentSignStep$;
  readonly formats = CONSULTATION_FORMAT;
  readonly steps = CLIENT_PSYCHOLOGIST_SIGN_STEPS;
  readonly scheduleForm = this.facade.scheduleForm;
  readonly datetimeForm = this.facade.datetimeForm;
  readonly monthsOptions = monthsOptions();
  readonly yearOptions = yearOptions();
  readonly schedule$ = this.facade.getGroupedSchedule$(this.psychologist.id);

  selectedFormat!: CONSULTATION_FORMAT;
  selectedSubject!: ISubject;
  constructor(
    private readonly facade: ClientPsychologistsFacade,
    private readonly dialogRef: MatDialogRef<ClientPsycholigistSignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly psychologist: IPsychologist,
    private readonly windowService: WindowService
  ) { }

  close(signed = false): void {
    this.dialogRef.close(signed);
  }


  onFormatSelect(format: CONSULTATION_FORMAT): void {
    this.selectedFormat = format;
  }

  async toNextStep(): Promise<any> {
    const currentStep = this.currentSignStep$.getValue();
    let nextStep = this.steps.SUBJECT_SELECT;
    switch (currentStep) {
      case this.steps.SUBJECT_SELECT:
        nextStep = this.steps.DATETIME_SELECT
        break;
      case this.steps.DATETIME_SELECT:
        await this.facade.createConsultation(
          this.selectedFormat,
          this.selectedSubject.id,
          this.datetimeForm.value?.schedule_id,
          this.psychologist.id
        );
        nextStep = this.steps.SUCCESS
        break;
      case this.steps.SUCCESS:
        this.windowService.location.href = 'https://yookassa.ru/';
        return;
    }
    this.currentSignStep$.next(nextStep);
  }

  onDatetimeSelect(time: IGroupedScheduleTime): void {
    this.datetimeForm.get('schedule_id')?.setValue(time.id);
    this.datetimeForm.get('datetime')?.setValue(time.time);
  }

  onSubjectSelect(subject: ISubject): void {
    this.selectedSubject = subject;
  }

  get consultationPrice(): number {
    return this.selectedFormat === CONSULTATION_FORMAT.FORMAT_EXPRESS
      ? CONSULTATION_FORMAT_PRICE.FORMT_EXPRESS_PRICE
      : CONSULTATION_FORMAT_PRICE.FORMT_FULL_PRICE;
  }

  get nextBtnIsDisabled$(): Observable<boolean> {
    return this.currentSignStep$.pipe(
      map(step => {
        let res = false;
        if (step === this.steps.FORMAT_SELECT && !this.selectedFormat) {
          res = true;
        }
        if (step === this.steps.SUBJECT_SELECT && !this.selectedSubject) {
          res = true;
        }
        if (step === this.steps.DATETIME_SELECT && this.datetimeForm.invalid) {
          res = true;
        }
        return res;
      })
    );
  }
}
