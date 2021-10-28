import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IUser } from '@psycho/core';

@Component({
  selector: 'psycho-profile-sidebar-header',
  templateUrl: './profile-sidebar-header.component.html',
  styleUrls: ['./profile-sidebar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSidebarHeaderComponent {
  @Input() user!: IUser | null;

}
