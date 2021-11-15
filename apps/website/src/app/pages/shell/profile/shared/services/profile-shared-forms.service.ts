import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Injectable({
  providedIn: 'any'
})
export class ProfileSharedForms {

  constructor(private readonly fb: FormBuilder) { }

  get avatarForm(): FormGroup {
    return this.fb.group({
      image: [null, RxwebValidators.image({
        maxWidth: 2000,
        maxHeight: 2000,
        minHeight: 200,
        minWidth: 200
      })]
    });
  }

  get emailForm(): FormGroup {
    return this.fb.group({
      email: [null, [RxwebValidators.email(), RxwebValidators.required()]]
    });
  }

  get passwordForm(): FormGroup {
    return this.fb.group({
      current_password: [null, [
        RxwebValidators.required()
      ]],
      password: [null, [
        RxwebValidators.password({
          validation: {
            alphabet: true,
            digit: true,
            // specialCharacter: true,
            minLength: 6,
            maxLength: 16,
          }
        }),
        RxwebValidators.required()
      ]],
      repeat_password: [null, [
        RxwebValidators.compare({
          fieldName: 'password'
        }),
        RxwebValidators.required()
      ]],
    });
  }

}