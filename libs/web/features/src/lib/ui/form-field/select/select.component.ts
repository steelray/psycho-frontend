import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
export class SelectComponent extends BaseFormFieldComponent implements OnInit {
  @Input() options!: ISelectOption[];
  @Input() prompt!: string;
  @Input() translateOptions = false;
  @Output() selected = new EventEmitter();

  trackByFn(index: number, item: any): number {
    return index;
  }

  ngOnInit(): void {
    super.ngOnInit();

    if (this.options) {
      let activeOption = null;
      if (this.control.value && Array.isArray(this.control.value)) {
        activeOption = this.options.find(option => compareArrays(this.control.value, option.value));
      } else if (this.control.value) {
        activeOption = this.options.find(option => option.value === this.control.value);
      }
      if (activeOption) {
        this.control.setValue(activeOption.value, { emitEvent: false });
      }
    }
  }


  onSelect(event: MatSelectChange): void {
    this.selected.emit(event.value);
  }

}
