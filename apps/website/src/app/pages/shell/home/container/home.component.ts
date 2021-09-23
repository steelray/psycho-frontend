import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'psycho-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeFacade]
})
export class HomeComponent implements OnInit {
  readonly subjects$ = this.facade.subjects$;
  readonly specialists$ = this.facade.specialists$;

  constructor(
    @Self() private facade: HomeFacade
  ) { }

  ngOnInit(): void {
  }

}
