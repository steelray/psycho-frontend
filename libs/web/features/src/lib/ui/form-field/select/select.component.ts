import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ISelectOption } from '@psycho/core';
import { compareArrays } from '@psycho/utils';
import { BaseFormFieldComponent } from '../../../base';

@Component({
  selector: 'psycho-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends BaseFormFieldComponent implements OnChanges {
  @Input() options!: ISelectOption[];
  @Input() prompt!: string;
  @Input() translateOptions = false;
  @Output() selected = new EventEmitter();

  trackByFn(index: number, item: any): number {
    return index;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.options?.currentValue) {
      const selected = changes?.options?.currentValue?.find((item: any) => item?.isSelected);
      if (selected) {
        this.control.setValue(selected.value)
      }
    }
  }

  onSelect(event: MatSelectChange): void {
    this.selected.emit(event.value);
  }

}
