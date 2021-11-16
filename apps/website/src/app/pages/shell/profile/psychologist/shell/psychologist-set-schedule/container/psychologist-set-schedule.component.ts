import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { IClientConsultation } from '@psycho/core';
import * as moment from 'moment';
import { tap } from 'rxjs/operators';
import { PsychologistSetScheduleConsultationsDialogComponent } from '../components/psychologist-set-schedule-consultations-dialog/psychologist-set-schedule-consultations-dialog.component';
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
  private readonly dateFormat = 'DD.MM.YYYY';
  readonly selectedUnixes: number[] = []; // all selected unix
  readonly hours$ = this.facade.hours$;
  readonly isLoading$ = this.facade.isLoading$;
  readonly consultations$ = this.facade.consultations$.pipe(
    tap(res => this.consultations = res)
  );
  consultations!: IClientConsultation[];

  readonly schedule$ = this.facade.selectedDateSchedule$;
  selectedDate!: moment.Moment | null;
  readonly minDate = new Date();
  constructor(
    private readonly facade: PsychologistSetScheduleFacade,
    private readonly dialog: MatDialog
  ) { }

  dateClass = (d: moment.Moment) => {
    const date = d.format(this.dateFormat);

    const consultationsDates = this.consultations.map(consultation => {
      const ts = consultation?.schedule?.datetime ? consultation?.schedule?.datetime * 1000 : 0;
      return moment(ts).format(this.dateFormat);
    });

    // Highlight saturday and sunday.
    return consultationsDates.includes(date) ? 'highlight-dates' : undefined;
  }

  onSelectDate(date: moment.Moment): void {
    this.selectedDate = date;
    this.facade.setSelectedDate(date);
    this.openConsultationsModalIfExist(date.format(this.dateFormat));
  }

  onTimeRemove(event: Event, unix: number): void {
    event.preventDefault();
    this.facade.onTimeRemove(unix);
  }

  onSelectHour(hour: IHour): void {
    if (hour.setted) {
      return;
    }
    this.facade.toggleDateToSelectedDates(hour);
  }

  onSave(): void {
    this.facade.saveHours();
  }

  trackByFn(index: number, item: IHour): number {
    return item.unix;
  }

  private openConsultationsModalIfExist(date: string): void {
    const consultations = this.consultations.filter(consultation => {
      const ts = consultation?.schedule?.datetime ? consultation?.schedule?.datetime * 1000 : 0;
      return moment(ts).format(this.dateFormat) === date;
    });
    if (!consultations.length) {
      return;
    }
    this.dialog.open(PsychologistSetScheduleConsultationsDialogComponent, {
      data: {
        consultations,
        selected_date: date
      },
      width: '700px'
    })
  }

}
