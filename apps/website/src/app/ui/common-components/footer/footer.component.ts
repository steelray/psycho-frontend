import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IContacts, IMenuItem } from '@psycho/core';

@Component({
  selector: 'psycho-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  @Input() menuItems: IMenuItem[] = [];
  @Input() linkItems: IMenuItem[] = [];
  @Input() isHomePage = false;
  @Input() contacts!: IContacts;
  readonly year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {

  }

}
