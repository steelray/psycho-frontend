import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatetimepickerComponent } from './datetimepicker/datetimepicker.component';
import { FileInputComponent } from './file-input/file-input.component';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import { InputComponent } from './input/input.component';
import { RangeDatepickerComponent } from './range-datepicker/range-datepicker.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { TextMaskModule } from 'angular2-text-mask';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReactiveFormsModule } from '@angular/forms';
import { RangeDatepickerMaxRangeDirective } from './range-datepicker/range-datepicker-max-range.directive';
import { MaterialIconCustomizeModule } from '@psycho/web/core';
import { CoreSharedModules } from '@psycho/core';
import { PipesModule } from '@psycho/features';
const compoments = [
  DatepickerComponent,
  DatetimepickerComponent,
  FileInputComponent,
  InputComponent,
  InputAutocompleteComponent,
  RangeDatepickerComponent,
  SelectComponent,
  TextareaComponent
];
@NgModule({
  declarations: [...compoments, RangeDatepickerMaxRangeDirective],
  imports: [
    CoreSharedModules,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMenuModule,
    TextMaskModule,
    MatTooltipModule,
    MatRippleModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    Ng2FlatpickrModule,
    ClipboardModule,
    MaterialIconCustomizeModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: compoments
})
export class FormFieldModule { }
