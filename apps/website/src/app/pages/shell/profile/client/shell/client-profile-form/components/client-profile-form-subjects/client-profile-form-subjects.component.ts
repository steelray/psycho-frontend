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
    let selectedIds = this.control?.value ?? [];
    const id = subject.id;
    if (!selectedIds.find((i: number) => i === id)) {
      subject.isSelected = true;
      selectedIds = [...selectedIds, id];
    } else {
      subject.isSelected = false;
      selectedIds = selectedIds.filter((i: number) => i !== id);
    }

    if (selectedIds.length === 0) {
      selectedIds = null;
    }

    this.control?.setValue(selectedIds);
  }

  get control(): FormControl | AbstractControl | null {
    return this.form.get('subjects');
  }

  trackByFn(index: number): number {
    return index;
  }

}
