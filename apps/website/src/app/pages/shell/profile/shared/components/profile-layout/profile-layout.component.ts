import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IUser } from '@psycho/core';

@Component({
  selector: 'psycho-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileLayoutComponent {
  @Input() showSidebar: boolean | null = false;
  @Input() isClient!: boolean | undefined;
  @Input() isPsychologist!: boolean | undefined;
}
