import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Injectable()
export class ClientProfileFormFacade {

  constructor(
    private readonly fb: FormBuilder
  ) { }

  get formatForm(): FormGroup {
    return this.fb.group({
      format: [null, RxwebValidators.required()]
    });
  }

  get commonQuestionsForm(): FormGroup {
    return this.fb.group({
      first_name: [null, [
        RxwebValidators.required(),
        RxwebValidators.alpha()
      ]],
      last_name: [null, [
        RxwebValidators.alpha()
      ]],
      middle_name: [null, [
        RxwebValidators.alpha()
      ]],
      birthday: [null, [
        RxwebValidators.required()
      ]],
      email: [null, [
        RxwebValidators.required(),
        RxwebValidators.email()
      ]],
    });
  }

  get subjectsForm(): FormGroup {
    return this.fb.group({
      subjects: [null, [RxwebValidators.required]]
    });
  }

  get specialistForm(): FormGroup {
    return this.fb.group({
      psychologist_id: [null, [RxwebValidators.required, RxwebValidators.numeric()]]
    });
  }

  get datetimeForm(): FormGroup {
    return this.fb.group({
      datetime: [null, [RxwebValidators.required]]
    });
  }

}