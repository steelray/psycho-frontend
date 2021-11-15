import { Injectable } from '@angular/core';
import { IPsychologist, IPsychologistSchedule, ISelectOption, PsychologistApiService } from '@psycho/core';
import { momentWithUTC, WithDestroy } from '@psycho/utils';
import { SnackbarService } from '@psycho/web/features';
import * as moment from 'moment';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, finalize, map, switchMap, takeUntil, tap } from 'rxjs/operators';

export interface IHour {
  unix: number;
  title?: string;
  selected?: boolean;
  setted?: boolean;
  disabled?: boolean;
}

@Injectable()
export class PsychologistSetScheduleFacade extends WithDestroy() {
  private readonly _selectedDate$ = new BehaviorSubject<moment.Moment | null>(null); // current selected date from calendar
  private readonly _selectedSettedHours$ = new BehaviorSubject<IHour[]>([]); // all selected|setted hours of all dates(selected = not saved yet but selected by user in real time, setted = setted hour in db)

  private readonly updateSchedule$ = new BehaviorSubject<null>(null); // for updating schedule|hours falgs after save  
  readonly isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly psychologistApiService: PsychologistApiService,
    private readonly snackbar: SnackbarService
  ) {
    super();
  }



  get selectedDateSchedule$(): Observable<IPsychologistSchedule[]> {
    return combineLatest([
      this.psychologistApiService.getProfile(),
      this._selectedDate$.pipe(
        filter(date => !!date),
        tap(date => console.log(date?.format())),
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


  get hours$(): Observable<IHour[]> {
    return this._selectedSettedHours$.pipe(
      map(res => new Array(13)
        .fill(+momentWithUTC().set({ hour: 9 }).format('H'))
        .map((v, i) => v + i)
        .map(v =>
          momentWithUTC()
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
        })))
    )
  }

  saveHours(): void {
    const times = this._selectedSettedHours$.getValue().filter(hour => !hour.setted).map(hour => hour.unix); // get only selected(not saved yet) hours
    this.psychologistApiService.setSchedule(times).pipe(
      tap(() => this.isLoading$.next(true)),
      finalize(() => this.isLoading$.next(false)),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.snackbar.info('Ваше расписание успешно сохранено');
      this.updateSchedule$.next(null);
    });
  }

  setSelectedDate(date: moment.Moment): void {
    this._selectedDate$.next(date);
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

  private setSettedHours(schdule: IPsychologistSchedule[]): void {
    schdule.forEach(item => this.toggleDateToSelectedDates({
      unix: item.datetime / 1000,
      setted: true,
      selected: false
    }))
  }

}