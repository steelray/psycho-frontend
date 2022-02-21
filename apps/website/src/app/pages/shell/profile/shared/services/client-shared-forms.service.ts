import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Injectable()
export class ClientSharedFormsService {

  constructor(
    private readonly fb: FormBuilder
  ) { }

  get scheduleForm(): FormGroup {
    return this.fb.group({
      year: [new Date().getFullYear()],
      month: [new Date().getMonth() + 1],
      date: [new Date().getDate(), RxwebValidators.required()],
      psychologist_id: [null, RxwebValidators.required()]
    });;
  }

  get datetimeForm(): FormGroup {
    return this.fb.group({
      schedule_id: [null, [RxwebValidators.required()]],
      datetime: [null]
    });
  }

  get subjectForm(): FormGroup {
    return this.fb.group({
      subject_id: [null, [RxwebValidators.required()]]
    });
  }

  get formatForm(): FormGroup {
    return this.fb.group({
      format: [null, RxwebValidators.required()]
    });
  }

  get specialistForm(): FormGroup {
    return this.fb.group({
      psychologist_id: [null, [RxwebValidators.required(), RxwebValidators.numeric()]]
    });
  }

  get reviewForm(): FormGroup {
    return this.fb.group({
      psychologist_id: [null, RxwebValidators.required()],
      rating: [null, RxwebValidators.required()],
      review: [null, RxwebValidators.required()],
      consultation_id: [null]
    })
  }


}