import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CONSULTATION_FORMAT, IGroupedScheduleTime } from '@psycho/core';
import { monthsOptions, yearOptions } from '@psycho/utils';
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
  readonly schedule$ = this.facade.getGroupedSchedule$(this.id);

  selectedFormat!: CONSULTATION_FORMAT;
  constructor(
    private readonly facade: ClientPsychologistsFacade,
    private readonly dialogRef: MatDialogRef<ClientPsycholigistSignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly id: number
  ) { }

  close(signed = false): void {
    this.dialogRef.close(signed);
  }


  onFormatSelect(format: CONSULTATION_FORMAT): void {
    this.selectedFormat = format;
  }

  toNextStep(): void { }

  onSelect(time: IGroupedScheduleTime): void {
    this.datetimeForm.get('schedule_id')?.setValue(time.id);
    this.datetimeForm.get('datetime')?.setValue(time.time);
  }
}
