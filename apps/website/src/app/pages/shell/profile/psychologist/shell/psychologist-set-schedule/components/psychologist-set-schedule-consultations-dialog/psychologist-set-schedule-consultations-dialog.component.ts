import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CONSULTATION_FORMAT, CONSULTATION_FORMAT_PRICE, IClientConsultation } from '@psycho/core';

@Component({
  selector: 'psycho-psychologist-set-schedule-consultations-dialog',
  templateUrl: './psychologist-set-schedule-consultations-dialog.component.html',
  styleUrls: ['./psychologist-set-schedule-consultations-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistSetScheduleConsultationsDialogComponent {
  readonly formats = CONSULTATION_FORMAT;
  readonly prices = CONSULTATION_FORMAT_PRICE;

  constructor(
    private readonly dialogRef: MatDialogRef<PsychologistSetScheduleConsultationsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: {
      consultations: IClientConsultation,
      selected_date: string | number
    }
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }

}
