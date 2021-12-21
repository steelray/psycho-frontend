import { Injectable } from '@angular/core';
import { ClientApiService, ConsultationApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { ClientProfileFormsService } from '../../../shared/components/client-profile-forms/client-profile-forms.service';

@Injectable()
export class NewSessionFacade {
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

  constructor(
    private readonly clientApiService: ClientApiService,
    private readonly clientProfileFormsService: ClientProfileFormsService,
    private readonly consultationApiService: ConsultationApiService
  ) { }


  sign(): Observable<boolean> {
    const data = this.collectFormsData();
    return this.consultationApiService.createConsultation(data);
  }

  private collectFormsData(): any {
    return {
      ...this.formatForm.value,
      ...this.subjectsForm.value,
      ...this.specialistForm.value,
      ...this.datetimeForm.value,
    };

  }
}