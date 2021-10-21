import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISubject } from '@psycho/core';

const SUBJECTS_MOCK: ISubject[] = [];

@Component({
  selector: 'psycho-home-subjects',
  templateUrl: './home-subjects.component.html',
  styleUrls: ['./home-subjects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSubjectsComponent implements OnInit {
  @Input() subjects!: ISubject[] | null;
  constructor() { }

  ngOnInit(): void {
  }

}
