import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPsychologist, ISelectOption, ISubject, PsychologistApiService, SubjectApiService } from '@psycho/core';
import { generateYears } from '@psycho/utils';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class ClientProfileFormFacade {
  readonly psychologists$: Observable<IPsychologist[]> = this.psychologistApiService.fetchAll({
    expand: 'education,description'
  }).pipe(
    shareReplay()
  );
  readonly yearsOptions: ISelectOption[] = generateYears(new Date().getFullYear() - 100, new Date().getFullYear() - 17).reverse().map(v => ({
    value: v,
    title: `${v}`
  }));
  readonly subjects$: Observable<ISubject[]> = this.subjectApiService.getSubjects().pipe(
    shareReplay()
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly subjectApiService: SubjectApiService,
    private readonly psychologistApiService: PsychologistApiService
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
      subscribe: [true]
    });
  }

  get subjectsForm(): FormGroup {
    return this.fb.group({
      subjects: [null, [RxwebValidators.required()]]
    });
  }

  get specialistForm(): FormGroup {
    return this.fb.group({
      psychologist_id: [null, [RxwebValidators.required(), RxwebValidators.numeric()]]
    });
  }

  get datetimeForm(): FormGroup {
    return this.fb.group({
      datetime: [null, [RxwebValidators.required()]]
    });
  }

}