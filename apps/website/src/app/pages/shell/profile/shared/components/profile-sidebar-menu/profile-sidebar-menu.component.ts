import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ISelectOption } from '@psycho/core';

@Component({
  selector: 'psycho-profile-sidebar-menu',
  templateUrl: './profile-sidebar-menu.component.html',
  styleUrls: ['./profile-sidebar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSidebarMenuComponent {
  @Input() menuItems!: ISelectOption[] | null;
  @Output() logout = new EventEmitter();

  onLogout(): void {
    this.logout.emit();
  }
}
