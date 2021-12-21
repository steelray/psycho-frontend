import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IMenuItem } from '@psycho/core';

@Component({
  selector: 'psycho-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  @Input() menuItems: IMenuItem[] = [];
  @Input() isHomePage = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.isHomePage);

  }

}
