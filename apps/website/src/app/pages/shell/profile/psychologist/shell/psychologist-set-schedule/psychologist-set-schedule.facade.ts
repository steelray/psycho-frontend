import { Injectable } from '@angular/core';
import { ConsultationApiService, IClientConsultation, IPsychologistSchedule, PsychologistApiService } from '@psycho/core';
import { momentWithUTC, WithDestroy } from '@psycho/utils';
import { SnackbarService } from '@psycho/web/features';
import * as moment from 'moment';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, finalize, map, shareReplay, switchMap, takeUntil, tap } from 'rxjs/operators';

export interface IHour {
  unix: number;
  title?: string;
  selected?: boolean;
  setted?: boolean;
  disabled?: boolean;
}

@Injectable()
export class PsychologistSetScheduleFacade extends WithDestroy() {
  private readonly _selectedMonth$ = new BehaviorSubject<moment.Moment | null>(null); // current selected date from calendar
  private readonly _selectedDate$ = new BehaviorSubject<moment.Moment | null>(null); // current selected date from calendar
  private readonly _selectedSettedHours$ = new BehaviorSubject<IHour[]>([]); // all selected|setted hours of all dates(selected = not saved yet but selected by user in real time, setted = setted hour in db)

  private readonly updateSchedule$ = new BehaviorSubject<null>(null); // for updating schedule|hours falgs after save  
  private _consultations$!: Observable<IClientConsultation[]>;
  private _selectedMonthSchedule$ = new BehaviorSubject<IPsychologistSchedule[]>([]);
  private selectedMonthDate!: number | undefined;

  readonly isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly psychologistApiService: PsychologistApiService,
    private readonly consultationApiService: ConsultationApiService,
    private readonly snackbar: SnackbarService
  ) {
    super();
  }

  get selectedDateSchedule$(): Observable<IPsychologistSchedule[]> {
    return combineLatest([
      this.psychologistApiService.getProfile(),
      this._selectedDate$.pipe(
        filter(date => !!date),
        map(date => ({
          start: date?.startOf('day').set({ hour: 1 }).format('D.MM.yyyy HH:mm'),
          end: date?.endOf('day').format('D.MM.yyyy HH:mm')
        }))
      ),
      this.updateSchedule$
    ]).pipe(
      switchMap(([profile, date]) => this.psychologistApiService.getSchedule(profile.id, date.start, date.end)),
      tap(schdule => this.setSettedHours(schdule)) // save all setted hours in state
    )
  }

  get selectedMonthSchedule$(): Observable<IPsychologistSchedule[]> {
    return combineLatest([
      this.psychologistApiService.getProfile(),
      this._selectedMonth$.pipe(
        filter(date => !!date)
      ),
      this.updateSchedule$
    ]).pipe(
      switchMap(([profile, date]) => {
        if (date?.unix() !== this.selectedMonthDate) {

          this.selectedMonthDate = date?.unix();
          const start = moment(date).startOf('month').set({ hour: 1 }).format('D.MM.yyyy HH:mm');
          const end = moment(date).endOf('month').format('D.MM.yyyy HH:mm')
          return this.psychologistApiService.getSchedule(profile.id, start, end).pipe(
            tap(data => this._selectedMonthSchedule$.next(data))
          )
        }
        return this._selectedMonthSchedule$.asObservable();
      })
    )
  }


  get hours$(): Observable<IHour[]> {
    return this._selectedSettedHours$.pipe(
      map(res => new Array(13)
        .fill(+momentWithUTC().set({ hour: 9 }).format('H'))
        .map((v, i) => v + i)
        .map(v =>
          momentWithUTC(this._selectedDate$.getValue()?.format())
            .set({
              hour: v,
              minute: 0,
              second: 0
            }).unix()
        )
        .map(v => ({
          unix: v,
          title: momentWithUTC(v * 1000).format('HH:mm'),
          disabled: v < momentWithUTC().unix(),
          setted: res.find(hour => hour.unix === v)?.setted || false,
          selected: !!res.find(hour => hour.unix === v)
        }))),
    )
  }

  get consultations$(): Observable<IClientConsultation[]> {
    if (!this._consultations$) {
      this._consultations$ = this.consultationApiService.getPsychologistConsultations().pipe(
        shareReplay()
      );
    }
    return this._consultations$;
  }

  saveHours(): void {
    const times = this._selectedSettedHours$.getValue().filter(hour => !hour.setted).map(hour => hour.unix); // get only selected(not saved yet) hours
    this.psychologistApiService.setSchedule(times).pipe(
      tap(() => this.isLoading$.next(true)),
      finalize(() => this.isLoading$.next(false)),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.snackbar.info('Ваше расписание успешно сохранено');
      const allTimes = this._selectedSettedHours$.getValue();
      this._selectedSettedHours$.next(allTimes.map(hour => {
        hour.selected = false;
        hour.setted = true;
        return hour;
      }))
    });
  }

  setSelectedDate(date: moment.Moment): void {
    this._selectedDate$.next(date);
    this._selectedSettedHours$.next([]);
  }

  toggleDateToSelectedDates(hour: IHour): void {
    const currentHours: IHour[] = this._selectedSettedHours$.getValue();
    let res: IHour[] = [];
    if (currentHours.find(h => h.unix === hour.unix)) {
      res = currentHours.filter(h => h.unix !== hour.unix);
    } else {
      res = [...currentHours, hour];
    }
    this._selectedSettedHours$.next(res);
  }

  onTimeRemove(unix: number): void {
    this.psychologistApiService.removeTimeFromSchedule(unix).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this._selectedSettedHours$.next(this._selectedSettedHours$.getValue().filter(hour => hour.unix !== unix));
    });
  }

  setSelectedMonth(date: moment.Moment): void {
    this._selectedMonth$.next(date);
  }

  private setSettedHours(schdule: IPsychologistSchedule[]): void {
    schdule.forEach(item => this.toggleDateToSelectedDates({
      unix: item.datetime / 1000,
      setted: true,
      selected: false
    }))
  }

}