import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-psychologist',
  templateUrl: './psychologist.component.html',
  styleUrls: ['./psychologist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
