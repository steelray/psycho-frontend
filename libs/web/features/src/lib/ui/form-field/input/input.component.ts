import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseFormFieldComponent } from '@psycho/web/core';

@Component({
  selector: 'pb-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends BaseFormFieldComponent {
  @Input() type: 'text' | 'number' | 'password' | 'email' | 'search' | 'file' = 'text';
  @Input() readonly!: boolean;
  @Input() mask: any;
  @Input() autocomplete = 'off';
  @Output() keyUp = new EventEmitter();


  onKeyUp(event: KeyboardEvent): void {
    this.keyUp.emit(event);
  }
}
