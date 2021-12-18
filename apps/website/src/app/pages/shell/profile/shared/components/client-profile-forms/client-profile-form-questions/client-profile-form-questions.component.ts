import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISelectOption } from '@psycho/core';

@Component({
  selector: 'psycho-client-profile-form-questions',
  templateUrl: './client-profile-form-questions.component.html',
  styleUrls: ['./client-profile-form-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormQuestionsComponent {
  @Input() form!: FormGroup;
  @Input() yearsOptions: ISelectOption[] = [];

}
