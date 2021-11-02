import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientApiService, CONSULTATION_FORMAT, IGroupedSchedule, IPsychologist, IPsychologistSchedule, PsychologistApiService } from '@psycho/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import * as moment from 'moment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { ClientSharedFormsService } from '../../../shared/services/client-shared-forms.service';

export enum CLIENT_PSYCHOLOGIST_SIGN_STEPS {
  FORMAT_SELECT = 'format select',
  SUBJECT_SELECT = 'subject select',
  DATETIME_SELECT = 'datetime select',
  SUCCESS = 'signed'
}

@Injectable()
export class ClientPsychologistsFacade {
  readonly currentSignStep$ = new BehaviorSubject(CLIENT_PSYCHOLOGIST_SIGN_STEPS.FORMAT_SELECT);
  private readonly _updateMyPsychologists$ = new BehaviorSubject(null);
  private _myPsychologists$!: Observable<IPsychologist[]>;
  private _signForm!: FormGroup;
  private _scheduleForm!: FormGroup;
  private _datetimeForm!: FormGroup;
  private _subjectsForm!: FormGroup;
  private _commentForm!: FormGroup;

  constructor(
    private readonly clientApiService: ClientApiService,
    private readonly fb: FormBuilder,
    private readonly psychologistApiService: PsychologistApiService,
    private readonly formsService: ClientSharedFormsService
  ) { }

  get myPsychologists$(): Observable<IPsychologist[]> {
    if (!this._myPsychologists$) {
      this._myPsychologists$ = this._updateMyPsychologists$.pipe(
        switchMap(() => this.clientApiService.getMyPsychologists())
      );
    }
    return this._myPsychologists$;
  }



  onSign(id: number): Observable<any> {
    return of();
  }

  get signForm(): FormGroup {
    if (!this._signForm) {
      this._signForm = this.fb.group({
        format: [null, RxwebValidators.required()],
        schedule_id: [null, RxwebValidators.required()]
      })
    }
    return this._signForm;
  }


  get datetimeForm(): FormGroup {
    if (!this._datetimeForm) {
      this._datetimeForm = this.formsService.datetimeForm;
    }
    return this._datetimeForm;
  }


  get scheduleForm(): FormGroup {
    if (!this._scheduleForm) {
      this._scheduleForm = this.formsService.scheduleForm;
    }
    return this._scheduleForm;
  }

  get subjectsForm(): FormGroup {
    if (!this._subjectsForm) {
      this._subjectsForm = this.formsService.subjectForm;
    }
    return this._subjectsForm;
  }

  get commentForm(): FormGroup {
    if (!this._commentForm) {
      this._commentForm = this.fb.group({
        psychologist_id: [null, RxwebValidators.required()],
        rating: [null, RxwebValidators.required()],
        review: [null, RxwebValidators.required()]
      })
    }
    return this._commentForm;
  }

  getGroupedSchedule$(psychologistId: number): Observable<IGroupedSchedule[]> {
    return this.scheduleForm.valueChanges.pipe(
      startWith(this.defaultDatetimeValue())
    ).pipe(
      switchMap(res => this.psychologistApiService.getMonthSchedule(res.year, res.month + 1, psychologistId).pipe(
      )),
      map(res => {
        const arr: IGroupedSchedule[] = [];
        res.forEach((item: IPsychologistSchedule) => {
          const date = moment(item.datetime).format('YYYY.MM.DD');
          const exists = arr.find(i => i.date === date);
          if (exists) {
            exists.times.push({
              id: item.id,
              time: item.datetime
            });
          } else {
            arr.push({
              date,
              times: [{
                id: item.id,
                time: item.datetime
              }]
            })
          }
        });
        return arr;
      })
    );
  }

  createConsultation(format: CONSULTATION_FORMAT, subject_id: number, schedule_id: number, psychologist_id: number): Promise<any> {
    return this.clientApiService.createConsultation({
      subject_id,
      schedule_id,
      psychologist_id,
      format
    }).toPromise();
  }

  commentAndRate(): Observable<boolean> {
    return this.clientApiService.setPsychologistRating(this.commentForm.value).pipe(
      tap(() => this._updateMyPsychologists$.next(null))
    );
  }

  private defaultDatetimeValue(): { year: number, month: number, date: number, psychologist_id: number | null } {
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: now.getMonth(),
      date: now.getDate(),
      psychologist_id: null
    }
  }


}