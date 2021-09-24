import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-home-first-meeting',
  templateUrl: './home-first-meeting.component.html',
  styleUrls: ['./home-first-meeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFirstMeetingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
