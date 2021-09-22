import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-home-greetings-block',
  templateUrl: './home-greetings-block.component.html',
  styleUrls: ['./home-greetings-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGreetingsBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
