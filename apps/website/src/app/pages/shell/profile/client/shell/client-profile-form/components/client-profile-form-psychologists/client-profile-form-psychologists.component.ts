import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPsychologist } from '@psycho/core';

@Component({
  selector: 'psycho-client-profile-form-psychologists',
  templateUrl: './client-profile-form-psychologists.component.html',
  styleUrls: ['./client-profile-form-psychologists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormPsychologistsComponent {
  @Input() form!: FormGroup;
  @Input() psychologists!: IPsychologist[] | null;

  expandedText!: number | null;

  onChoose(id: number): void {
    this.form.get('psychologist_id')?.setValue(id);
  }

  expandEducationText(e: Event, id: number): void {
    e.preventDefault();
    this.expandedText = this.expandedText === id ? null : id;
  }
}
