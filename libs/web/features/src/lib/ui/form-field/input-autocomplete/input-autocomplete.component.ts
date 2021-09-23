import { Component, ChangeDetectionStrategy, Input, AfterViewInit, ElementRef, ViewChild, Self, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseFormFieldComponent } from '../../../base';
import { fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ISelectOption } from '@psycho/core';

@Component({
  selector: 'psycho-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAutocompleteComponent extends BaseFormFieldComponent implements AfterViewInit {
  @Input() options!: ISelectOption[];
  @Output() selected = new EventEmitter();
  @ViewChild('input') input!: ElementRef;
  constructor(
    private snackbar: MatSnackBar
  ) {
    super();
  }

  ngAfterViewInit(): void {
    if (typeof this.control.value === 'string') {
      this.control.patchValue(this.options.find(option => option.value === this.control.value));
    }


    fromEvent(this.input.nativeElement, 'blur').pipe(
      debounceTime(200),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      if (this.control.value && typeof this.control.value === 'string') {
        this.control.setValue('');
        this.snackbar.open(this.translateService.instant('ERRORS.PLEASE_SELECT_OPTION_FROM_LIST'), this.translateService.instant('CLOSE'), {
          panelClass: 'error',
          verticalPosition: 'top',
          duration: 3000
        });
      }
    });
  }

  displayWithFn(option: ISelectOption): string {
    return option?.title;
  }

  onSelect(event: MatAutocompleteSelectedEvent): void {
    this.selected.emit(event.option.value?.value || event.option.value);
  }

}
