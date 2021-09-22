import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
