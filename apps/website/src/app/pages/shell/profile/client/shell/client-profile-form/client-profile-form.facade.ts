import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientApiService } from '@psycho/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Observable } from 'rxjs';
import { ClientProfileFormsService } from '../../../shared/components/client-profile-forms/client-profile-forms.service';

@Injectable()
export class ClientProfileFormFacade {
  readonly yearsOptions = this.clientProfileFormsService.yearsOptions;
  readonly subjects$ = this.clientProfileFormsService.subjects$;
  readonly psychologists$ = this.clientProfileFormsService.psychologists$;

  readonly formatForm = this.clientProfileFormsService.formatForm;
  readonly subjectsForm = this.clientProfileFormsService.subjectsForm;
  readonly specialistForm = this.clientProfileFormsService.specialistForm;
  readonly datetimeForm = this.clientProfileFormsService.datetimeForm;
  readonly scheduleForm = this.clientProfileFormsService.scheduleForm;
  readonly selectedPsychologist$ = this.clientProfileFormsService.selectedPsychologist$;
  readonly selectedPsychologistGroupedSchedule$ = this.clientProfileFormsService.selectedPsychologistGroupedSchedule$;

  private _commonQuestionsForm!: FormGroup;

  constructor(
    private readonly clientApiService: ClientApiService,
    private readonly clientProfileFormsService: ClientProfileFormsService,
    private readonly fb: FormBuilder
  ) { }



  get commonQuestionsForm(): FormGroup {
    if (!this._commonQuestionsForm) {
      this._commonQuestionsForm = this.fb.group({
        first_name: [null, [
          RxwebValidators.required()
        ]],
        last_name: [null, [

        ]],
        middle_name: [null, [

        ]],
        birthday: [null, [
          RxwebValidators.required()
        ]],
        email: [null, [
          RxwebValidators.required(),
          RxwebValidators.email()
        ]],
        subscribe: [true]
      });
    }
    return this._commonQuestionsForm;
  }


  onCompleteRegistration(): Observable<boolean> {
    const data = this.collectFormsData();
    return this.clientApiService.completeRegistration(data);
  }

  private collectFormsData(): any {
    return {
      ...this.formatForm.value,
      ...this.commonQuestionsForm.value,
      ...this.subjectsForm.value,
      ...this.specialistForm.value,
      ...this.datetimeForm.value,
    };

  }
}