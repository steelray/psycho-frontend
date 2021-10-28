import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ISubject } from '@psycho/core';

@Component({
  selector: 'psycho-client-profile-form-subjects',
  templateUrl: './client-profile-form-subjects.component.html',
  styleUrls: ['./client-profile-form-subjects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormSubjectsComponent {
  @Input() form!: FormGroup;
  @Input() subjects: ISubject[] = [];

  onSelect(subject: ISubject) {
    this.control?.setValue(subject.id);
  }

  get control(): FormControl | AbstractControl | null {
    return this.form.get('subject_id');
  }

  trackByFn(index: number): number {
    return index;
  }

}
