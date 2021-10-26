import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, ClientApiService, IGroupedSchedule, IPsychologist, IPsychologistSchedule, ISelectOption, ISubject, PsychologistApiService, SubjectApiService } from '@psycho/core';
import { generateYears } from '@psycho/utils';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import * as moment from 'moment';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { concatAll, filter, map, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class ClientProfileFormFacade {
  readonly psychologists$: Observable<IPsychologist[]> = this.psychologistApiService.fetchAll({
    expand: 'education,description'
  });
  readonly yearsOptions: ISelectOption[] = generateYears(new Date().getFullYear() - 100, new Date().getFullYear() - 17).reverse().map(v => ({
    value: v,
    title: `${v}`
  }));
  readonly subjects$: Observable<ISubject[]> = this.subjectApiService.getSubjects().pipe(
    shareReplay()
  );


  private _formatForm!: FormGroup;
  private _commonQuestionsForm!: FormGroup;
  private _subjectsForm!: FormGroup;
  private _specialistForm!: FormGroup;
  private _datetimeForm!: FormGroup;
  private _scheduleForm!: FormGroup;
  private _selectedPsychologist$!: Observable<IPsychologist>;
  private _selectedPsychologistGroupedSchedule$!: Observable<IGroupedSchedule[]>;


  constructor(
    private readonly fb: FormBuilder,
    private readonly subjectApiService: SubjectApiService,
    private readonly psychologistApiService: PsychologistApiService,
    private readonly clientApiService: ClientApiService,
    private readonly authService: AuthService
  ) { }

  get formatForm(): FormGroup {
    if (!this._formatForm) {
      this._formatForm = this.fb.group({
        format: [null, RxwebValidators.required()]
      });
    }
    return this._formatForm;
  }

  get commonQuestionsForm(): FormGroup {
    if (!this._commonQuestionsForm) {
      this._commonQuestionsForm = this.fb.group({
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
    return this._commonQuestionsForm;
  }

  get subjectsForm(): FormGroup {
    if (!this._subjectsForm) {
      this._subjectsForm = this.fb.group({
        subjectIds: [null, [RxwebValidators.required()]]
      });
    }
    return this._subjectsForm;
  }

  get specialistForm(): FormGroup {
    if (!this._specialistForm) {
      this._specialistForm = this.fb.group({
        psychologist_id: [null, [RxwebValidators.required(), RxwebValidators.numeric()]]
      });
    }
    return this._specialistForm;
  }

  get datetimeForm(): FormGroup {
    if (!this._datetimeForm) {
      this._datetimeForm = this.fb.group({
        schedule_id: [null, [RxwebValidators.required()]],
        datetime: [null]
      });
    }
    return this._datetimeForm;
  }

  get scheduleForm(): FormGroup {
    if (!this._scheduleForm) {
      this._scheduleForm = this.fb.group({
        year: [new Date().getFullYear()],
        month: [new Date().getMonth() + 1],
        date: [new Date().getDate(), RxwebValidators.required()],
        psychologist_id: [null, RxwebValidators.required()]
      });
    }
    return this._scheduleForm;
  }

  get selectedPsychologist$(): Observable<IPsychologist | undefined> {
    if (!this._selectedPsychologist$) {
      this._selectedPsychologist$ = this._specialistForm.valueChanges.pipe(
        map(res => res.psychologist_id),
        filter(id => !!id),
        switchMap(id => this.psychologists$.pipe(
          map(psychologists => psychologists.find(psychologist => psychologist.id === id))
        )),
        tap(console.log)
      );
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
        switchMap(res => this.psychologistApiService.getMonthSchedule(res.year, res.month + 1, res.psychologist_id)),
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

  onCompleteRegistration(): Observable<boolean> {
    const data = this.collectFormsData();
    return this.clientApiService.completeRegistration(data).pipe(

    );
  }

  private collectFormsData(): any {
    return {
      ...this._formatForm.value,
      ...this._commonQuestionsForm.value,
      ...this._subjectsForm.value,
      ...this._specialistForm.value,
      ...this._datetimeForm.value,
    };

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