import { Component, Input } from '@angular/core';
import { Size } from 'ngx-spinner';
import { SPINNER_TYPE } from './spinner-types.enum';
@Component({
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent {
  @Input() type!: SPINNER_TYPE;
  @Input() color!: string;
  @Input() bdColor!: string;
  @Input() size!: Size;
  @Input() name!: string;

}
