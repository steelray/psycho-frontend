import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientProfileFormFacade } from '../client-profile-form.facade';

@Component({
  selector: 'psycho-client-profile-form',
  templateUrl: './client-profile-form.component.html',
  styleUrls: ['./client-profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientProfileFormFacade]
})
export class ClientProfileFormComponent {
  readonly formatForm = this.facade.formatForm;
  readonly commonQuestionsForm = this.facade.commonQuestionsForm;
  readonly subjectsForm = this.facade.subjectsForm;
  readonly specialistForm = this.facade.specialistForm;
  readonly datetimeForm = this.facade.datetimeForm;
  readonly yearsOptions = this.facade.yearsOptions;
  readonly subjects$ = this.facade.subjects$;
  readonly psychologists$ = this.facade.psychologists$;

  constructor(
    private readonly facade: ClientProfileFormFacade
  ) { }

}
