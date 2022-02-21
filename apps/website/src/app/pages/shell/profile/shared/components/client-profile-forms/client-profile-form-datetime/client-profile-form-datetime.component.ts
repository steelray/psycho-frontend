import { Component, ChangeDetectionStrategy, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IGroupedSchedule, IGroupedScheduleTime, IPsychologist, ISelectOption } from '@psycho/core';
import { generateYears, monthsList, monthsOptions, yearOptions } from '@psycho/utils';

@Component({
  selector: 'psycho-client-profile-form-datetime',
  templateUrl: './client-profile-form-datetime.component.html',
  styleUrls: ['./client-profile-form-datetime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormDatetimeComponent implements OnChanges {
  @Input() scheduleForm!: FormGroup;
  @Input() psychologist!: IPsychologist;
  @Input() schedule!: IGroupedSchedule[];
  @Input() datetimeForm!: FormGroup;
  readonly monthsOptions = monthsOptions();
  readonly yearOptions = yearOptions();

  onSelect(time: IGroupedScheduleTime): void {
    this.datetimeForm.get('schedule_id')?.setValue(time.id);
    this.datetimeForm.get('datetime')?.setValue(time.time);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

}
