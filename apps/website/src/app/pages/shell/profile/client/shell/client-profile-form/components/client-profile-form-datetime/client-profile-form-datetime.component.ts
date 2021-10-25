import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IGroupedSchedule, IPsychologist, IPsychologistSchedule, ISelectOption } from '@psycho/core';
import { generateYears, monthsList } from '@psycho/utils';
import * as moment from 'moment';

@Component({
  selector: 'psycho-client-profile-form-datetime',
  templateUrl: './client-profile-form-datetime.component.html',
  styleUrls: ['./client-profile-form-datetime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormDatetimeComponent {
  @Input() form!: FormGroup;
  @Input() psychologist!: IPsychologist;
  @Input() schedule!: IGroupedSchedule[];

  educationExpanded = false;
  descriptionExpanded = false;

  onToggle(blockName: 'education' | 'description'): void {
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
    return generateYears(new Date().getFullYear(), new Date().getFullYear() + 1).map(y => ({
      value: y,
      title: `${y}`
    }));
  }

}
