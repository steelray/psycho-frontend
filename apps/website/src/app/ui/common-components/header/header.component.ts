import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IContacts, IMenuItem, IUserAuthData } from '@psycho/core';

@Component({
  selector: 'psycho-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() menuItems!: IMenuItem[];
  @Input() userData!: IUserAuthData | null;
  @Input() isHomePage = false;
  @Input() isAuthPage = false;
  @Input() isProfilePage = false;
  @Input() linkItems!: IMenuItem[];
  @Input() contacts!: IContacts;
  @Output() logout = new EventEmitter();

  menuOpened = false;

  onLogout(): void {
    this.logout.emit();
  }

  onMenuToggle(): void {
    this.menuOpened = !this.menuOpened;
  }

  get supportLink(): string {
    return `/profile/${this.userData?.is_client ? 'client' : 'psychologist'}/support`;
  }
}
