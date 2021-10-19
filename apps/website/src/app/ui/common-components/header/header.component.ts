import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IMenuItem } from '@psycho/core';

@Component({
  selector: 'psycho-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() menuItems!: IMenuItem[];
  @Input() userData: any;
  @Output() logout = new EventEmitter();

  onLogout(): void {
    this.logout.emit();
  }
}
