import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, ClientApiService, IClientConsultation, IUserAuthData } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Observable } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';
import { ClientProfileFormsService } from '../../../shared/components/client-profile-forms/client-profile-forms.service';

@Injectable()
export class ClientProfileFormFacade extends WithDestroy() {
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
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    super();
    this.commonQuestionsForm.get('subscribe')?.valueChanges.pipe(
      startWith(false),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      if (res) {
        this.commonQuestionsForm.get('email')?.setValidators([
          RxwebValidators.email(),
          RxwebValidators.required()
        ]);
      } else {
        this.commonQuestionsForm.get('email')?.setValidators([
          RxwebValidators.email()
        ]);
      }
      this.commonQuestionsForm.get('email')?.updateValueAndValidity();
    })
  }



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
          RxwebValidators.email()
        ]],
        subscribe: [false]
      });
    }
    return this._commonQuestionsForm;
  }


  onCompleteRegistration(): Observable<IClientConsultation> {
    const data = this.collectFormsData();
    return this.clientApiService.completeRegistration(data).pipe(
      tap(data => {
        if (data) {
          const userData = this.authService.userData as IUserAuthData;
          userData.registration_completed = true;
          this.authService.saveUserData(userData);
        }
      })
    );
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