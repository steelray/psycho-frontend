import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISelectOption } from '@psycho/core';

@Component({
  selector: 'psycho-client-profile-form-questions',
  templateUrl: './client-profile-form-questions.component.html',
  styleUrls: ['./client-profile-form-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ClientProfileFormQuestionsComponent {
  @Input() form!: FormGroup;
  @Input() yearsOptions: ISelectOption[] = [];

}
