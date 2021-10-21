import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-client-profile-form-datetime',
  templateUrl: './client-profile-form-datetime.component.html',
  styleUrls: ['./client-profile-form-datetime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileFormDatetimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
