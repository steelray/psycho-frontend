import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISubject } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay, switchMap, takeUntil } from 'rxjs/operators';
import { PsychologistProfileFacade } from '../../psychologist-profile.facade';

@Component({
  selector: 'psycho-psychologist-profile-subjects-update-dialog',
  templateUrl: './psychologist-profile-subjects-update-dialog.component.html',
  styleUrls: ['./psychologist-profile-subjects-update-dialog.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PsychologistProfileFacade]
})
export class PsychologistProfileSubjectsUpdateDialogComponent extends WithDestroy() {
  selectedSubjects: number[] = this.data.map(subject => subject.id);
  private readonly updateSubjects$ = new BehaviorSubject(null);
  readonly subjects$ = this.updateSubjects$.pipe(
    switchMap(() => this.facade.subjects$.pipe(
      shareReplay()
    )),
    map(subjects => subjects.map(subject => {
      subject.isSelected = !!this.selectedSubjects.find(id => subject.id === id);
      return subject;
    }))
  );
  constructor(
    private readonly dialogRef: MatDialogRef<PsychologistProfileSubjectsUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) readonly data: ISubject[],
    private readonly facade: PsychologistProfileFacade,
  ) {
    super();
  }

  onSelect(selectedId: number): void {
    if (this.selectedSubjects.find(id => selectedId === id)) {
      this.selectedSubjects = this.selectedSubjects.filter(id => id !== selectedId);
    } else {
      this.selectedSubjects.push(selectedId);
    }
    this.updateSubjects$.next(null);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  trackByFn(index: number): number {
    return index;
  }

  onSubmit(): void {
    this.facade.setSubjects(this.selectedSubjects)?.pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => this.onClose())
  }

}
