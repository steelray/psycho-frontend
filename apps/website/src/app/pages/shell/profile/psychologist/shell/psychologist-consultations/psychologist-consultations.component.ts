import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-psychologist-consultations',
  templateUrl: './psychologist-consultations.component.html',
  styleUrls: ['./psychologist-consultations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistConsultationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
