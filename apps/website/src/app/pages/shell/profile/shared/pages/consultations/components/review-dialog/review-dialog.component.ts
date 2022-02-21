import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientApiService, IClientConsultation } from '@psycho/core';
import { ClientSharedFormsService } from '../../../../services/client-shared-forms.service';

@Component({
  selector: 'psycho-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientSharedFormsService]
})
export class ReviewDialogComponent implements OnInit {
  readonly form = this.formsService.reviewForm;

  constructor(
    private readonly formsService: ClientSharedFormsService,
    private readonly api: ClientApiService,
    @Inject(MAT_DIALOG_DATA) private readonly data: { consultation: IClientConsultation },
    private readonly dialogRef: MatDialogRef<ReviewDialogComponent>
  ) { }

  ngOnInit(): void {
    this.form.patchValue({
      psychologist_id: this.data.consultation?.psychologist?.id,
      consultation_id: this.data.consultation?.id
    });
  }

  commentAndRate(): void {
    if (this.form.invalid) {
      console.error(this.form.errors);
      return;
    }
    this.api.setPsychologistRating(this.form.value).subscribe(() => this.onClose(true));
  }

  onRate(rating: number): void {
    this.form.get('rating')?.setValue(rating);
  }

  onClose(res = false): void {
    this.dialogRef.close(res);
  }
}
