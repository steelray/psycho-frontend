import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WithDestroy } from '@psycho/utils';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { takeUntil } from 'rxjs/operators';
import { PsychologistProfileFacade } from '../../psychologist-profile.facade';

@Component({
  selector: 'psycho-psychologist-profile-slogan-change-dialog',
  templateUrl: './psychologist-profile-slogan-change-dialog.component.html',
  styleUrls: ['./psychologist-profile-slogan-change-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PsychologistProfileFacade]
})
export class PsychologistProfileSloganChangeDialogComponent extends WithDestroy() {
  readonly control = new FormControl(this.data, [RxwebValidators.required(), RxwebValidators.maxLength({ value: 255 })]);

  constructor(
    private readonly dialogRef: MatDialogRef<PsychologistProfileSloganChangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) readonly data: string,
    private readonly facade: PsychologistProfileFacade
  ) {
    super();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.control.invalid) {
      return;
    }
    this.facade.updateSlogan(this.control.value).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.onClose();
    });
  }

}
