import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IClientConsultation } from '@psycho/core';

@Component({
  selector: 'psycho-take-to-work-confirm-dialog',
  templateUrl: './take-to-work-confirm-dialog.component.html',
  styleUrls: ['./take-to-work-confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TakeToWorkConfirmDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly consultation: IClientConsultation,
    private readonly dialogRef: MatDialogRef<TakeToWorkConfirmDialogComponent>
  ) { }

  onClose(res = false): void {
    this.dialogRef.close(res);
  }

}
