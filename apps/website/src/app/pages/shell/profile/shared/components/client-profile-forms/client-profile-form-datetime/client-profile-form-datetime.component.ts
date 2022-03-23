import { Component, ChangeDetectionStrategy, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IGroupedSchedule, IGroupedScheduleTime, IPsychologist, ISelectOption } from '@psycho/core';
import { generateYears, monthsList, monthsOptions, WithDestroy, yearOptions } from '@psycho/utils';
import { Observable, of } from 'rxjs';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'psycho-client-profile-form-datetime',
  templateUrl: './client-profile-form-datetime.component.html',
  styleUrls: ['./client-profile-form-datetime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormDatetimeComponent extends WithDestroy() implements OnChanges, OnInit {
  @Input() scheduleForm!: FormGroup;
  @Input() psychologist!: IPsychologist;
  @Input() schedule!: IGroupedSchedule[];
  @Input() datetimeForm!: FormGroup;
  readonly yearOptions = yearOptions();
  readonly currentYear = new Date().getFullYear()
  monthsOptions$!: Observable<ISelectOption[]> | undefined;

  ngOnInit(): void {
    this.monthsOptions$ = this.scheduleForm.get('year')?.valueChanges.pipe(
      startWith(this.currentYear),
      map(res => {
        if (res === this.currentYear) {
          return monthsOptions(true);
        }
        return monthsOptions();
      })
    );
  }


  onSelect(time: IGroupedScheduleTime): void {
    this.datetimeForm.get('schedule_id')?.setValue(time.id);
    this.datetimeForm.get('datetime')?.setValue(time.time);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

}
