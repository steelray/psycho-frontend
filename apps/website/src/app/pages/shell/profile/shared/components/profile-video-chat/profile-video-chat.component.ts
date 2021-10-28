import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-profile-video-chat',
  templateUrl: './profile-video-chat.component.html',
  styleUrls: ['./profile-video-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileVideoChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
