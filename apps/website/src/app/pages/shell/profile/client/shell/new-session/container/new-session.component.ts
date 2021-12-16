import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewSessionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
