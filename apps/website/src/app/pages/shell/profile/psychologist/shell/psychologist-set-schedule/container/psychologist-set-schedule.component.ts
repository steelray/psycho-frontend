import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { IPsychologistSchedule } from '@psycho/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { IHour, PsychologistSetScheduleFacade } from '../psychologist-set-schedule.facade';

@Component({
  selector: 'psycho-psychologist-set-schedule',
  templateUrl: './psychologist-set-schedule.component.html',
  styleUrls: ['./psychologist-set-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PsychologistSetScheduleFacade,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class PsychologistSetScheduleComponent {
  readonly selectedUnixes: number[] = []; // all selected unix
  readonly hours$ = this.facade.hours$;
  readonly isLoading$ = this.facade.isLoading$;

  readonly schedule$ = this.facade.selectedDateSchedule$;
  selectedDate!: moment.Moment | null;
  readonly minDate = new Date();
  constructor(
    private readonly facade: PsychologistSetScheduleFacade
  ) { }

  dateClass = (d: moment.Moment) => {
    const date = d.get('day');
    // Highlight saturday and sunday.
    return (date === 0 || date === 6) ? 'highlight-dates' : undefined;
  }

  onSelectDate(date: moment.Moment): void {
    this.selectedDate = date;
    this.facade.setSelectedDate(date);
  }

  onTimeRemove(event: Event, id: number): void {
    event.preventDefault();
  }

  onSelectHour(hour: IHour): void {
    this.facade.toggleDateToSelectedDates(hour);
  }

  onSave(): void {
    this.facade.saveHours();
  }

  trackByFn(index: number, item: IHour): number {
    return item.unix;
  }

}
