import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientApiService, IGroupedSchedule, IPsychologist, IPsychologistSchedule, ISelectOption, ISubject, PsychologistApiService, SubjectApiService } from '@psycho/core';
import { generateYears } from '@psycho/utils';
import * as moment from 'moment';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { ClientSharedFormsService } from '../../services/client-shared-forms.service';

@Injectable()
export class ClientProfileFormsService {
  readonly yearsOptions: ISelectOption[] = generateYears(new Date().getFullYear() - 100, new Date().getFullYear() - 17).reverse().map(v => ({
    value: v,
    title: `${v}`
  }));
  readonly subjects$: Observable<ISubject[]> = this.subjectApiService.getSubjects().pipe(
    shareReplay()
  );
  private _psychologists$!: Observable<IPsychologist[]>;

  private _formatForm!: FormGroup;
  private _subjectsForm!: FormGroup;
  private _specialistForm!: FormGroup;
  private _datetimeForm!: FormGroup;
  private _scheduleForm!: FormGroup;
  private _selectedPsychologist$!: Observable<IPsychologist>;
  private _selectedPsychologistGroupedSchedule$!: Observable<IGroupedSchedule[]>;

  constructor(
    private readonly subjectApiService: SubjectApiService,
    private readonly psychologistApiService: PsychologistApiService,
    private readonly formsService: ClientSharedFormsService
  ) { }




  get formatForm(): FormGroup {
    if (!this._formatForm) {
      this._formatForm = this.formsService.formatForm;
    }
    return this._formatForm;
  }

  get subjectsForm(): FormGroup {
    if (!this._subjectsForm) {
      this._subjectsForm = this.formsService.subjectForm;
    }
    return this._subjectsForm;
  }

  get specialistForm(): FormGroup {
    if (!this._specialistForm) {
      this._specialistForm = this.formsService.specialistForm;
    }
    return this._specialistForm;
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

  get psychologists$(): Observable<IPsychologist[]> {
    if (!this._psychologists$) {
      this._psychologists$ = this.subjectsForm.get('subject_id')?.valueChanges.pipe(
        filter(id => !!id),
        switchMap(id => this.psychologistApiService.fetchAll({
          subject_id: id
        }).pipe(
          shareReplay()
        ))
      ) as Observable<IPsychologist[]>;
    }
    return this._psychologists$;
  }

  get selectedPsychologist$(): Observable<IPsychologist | undefined> {
    if (!this._selectedPsychologist$) {
      this._selectedPsychologist$ = this.specialistForm.get('psychologist_id')?.valueChanges.pipe(
        filter(id => !!id),
        switchMap(id => this.psychologistApiService.fetchOne(id)),
        shareReplay()
      ) as Observable<IPsychologist>;
    }
    return this._selectedPsychologist$;
  }

  get selectedPsychologistGroupedSchedule$(): Observable<IGroupedSchedule[]> {
    if (!this._selectedPsychologistGroupedSchedule$) {
      this._selectedPsychologistGroupedSchedule$ = combineLatest([
        this._scheduleForm.valueChanges.pipe(
          startWith(this.defaultDatetimeValue())
        ),
        this.selectedPsychologist$
      ]).pipe(
        filter(res => !!res[1]),
        map(res => {
          const formData = res[0];
          formData.psychologist_id = res[1]?.id;
          return formData;
        }),
        switchMap(res => this.psychologistApiService.getMonthSchedule(res.year, res.month + 1, res.psychologist_id, true)),
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

    return this._selectedPsychologistGroupedSchedule$;
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