import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IMenuItem } from '@psycho/core';

@Component({
  selector: 'psycho-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() menuItems!: IMenuItem[];
}
