import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseFormFieldComponent } from '../../../base';;

@Component({
  selector: 'psycho-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends BaseFormFieldComponent {
  @Input() type: 'text' | 'number' | 'password' | 'email' | 'search' | 'file' = 'text';
  @Input() readonly!: boolean;
  @Input() mask: any;
  @Input() autocomplete = 'off';
  @Input() passwordViewable = false;
  @Output() keyUp = new EventEmitter();

  onKeyUp(event: KeyboardEvent): void {
    this.keyUp.emit(event);
  }

  showHidePassword(): void {
    this.type = this.type === 'password' ? 'text' : 'password';
  }
}
