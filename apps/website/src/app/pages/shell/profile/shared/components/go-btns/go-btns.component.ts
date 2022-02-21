import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-go-btns',
  templateUrl: './go-btns.component.html',
  styleUrls: ['./go-btns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoBtnsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
