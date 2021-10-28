import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-profile-text-chat',
  templateUrl: './profile-text-chat.component.html',
  styleUrls: ['./profile-text-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileTextChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
