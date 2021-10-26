import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IGroupedSchedule, IGroupedScheduleTime, IPsychologist, ISelectOption } from '@psycho/core';
import { generateYears, monthsList } from '@psycho/utils';

@Component({
  selector: 'psycho-client-profile-form-datetime',
  templateUrl: './client-profile-form-datetime.component.html',
  styleUrls: ['./client-profile-form-datetime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormDatetimeComponent {
  @Input() scheduleForm!: FormGroup;
  @Input() psychologist!: IPsychologist;
  @Input() schedule!: IGroupedSchedule[];
  @Input() datetimeForm!: FormGroup;

  educationExpanded = false;
  descriptionExpanded = false;

  onToggle(e: Event, blockName: 'education' | 'description'): void {
    e.preventDefault();
    if (blockName === 'education') {
      this.educationExpanded = !this.educationExpanded;
    } else {
      this.descriptionExpanded = !this.descriptionExpanded;
    }
  }

  get monthsOptions(): ISelectOption[] {
    return monthsList().map((m, i) => ({
      value: i,
      title: m
    }));
  }

  get yearOptions(): ISelectOption[] {
    return generateYears(new Date().getFullYear(), new Date().getFullYear() + 2).map(y => ({
      value: y,
      title: `${y}`
    }));
  }

  onSelect(time: IGroupedScheduleTime): void {
    this.datetimeForm.get('schedule_id')?.setValue(time.id);
    this.datetimeForm.get('datetime')?.setValue(time.time);
  }

}
