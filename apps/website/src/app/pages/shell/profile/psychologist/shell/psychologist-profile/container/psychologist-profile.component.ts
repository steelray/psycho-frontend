import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ISubject } from '@psycho/core';
import { PsychologistProfileSloganChangeDialogComponent } from '../components/psychologist-profile-slogan-change-dialog/psychologist-profile-slogan-change-dialog.component';
import { PsychologistProfileSubjectsUpdateDialogComponent } from '../components/psychologist-profile-subjects-update-dialog/psychologist-profile-subjects-update-dialog.component';
import { PsychologistProfileFacade } from '../psychologist-profile.facade';

@Component({
  selector: 'psycho-psychologist-profile',
  templateUrl: './psychologist-profile.component.html',
  styleUrls: ['./psychologist-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PsychologistProfileFacade]
})
export class PsychologistProfileComponent {
  readonly profileData$ = this.facade.profileData$;
  readonly avatarForm = this.facade.avatarForm;
  readonly emailForm = this.facade.emailForm;
  readonly passwordForm = this.facade.passwordForm;
  readonly isLoading$ = this.facade.isLoading$;

  readonly changePassword$ = this.facade.changePassword$;

  constructor(
    private readonly facade: PsychologistProfileFacade,
    private readonly dialog: MatDialog
  ) {
  }

  onPasswordChange(): void {
    this.facade.onPasswordChange();
  }

  togglePasswordFields(): void {
    this.facade.changePassword$.next(!this.facade.changePassword$.getValue());
  }

  onAvatarUpload(event: any): void {
    const file = event?.target?.files[0];
    if (file) {
      this.avatarForm.get('image')?.setValue(file);
      this.facade.onAvatarUpload();
    }
  }


  onSloganChange(currentSlogan: string): void {
    this.dialog.open(PsychologistProfileSloganChangeDialogComponent, {
      width: '400px',
      data: currentSlogan
    });
  }

  onSubjectsUpdate(subjects: ISubject[]): void {
    this.dialog.open(PsychologistProfileSubjectsUpdateDialogComponent, {
      data: subjects
    });
  }

}
