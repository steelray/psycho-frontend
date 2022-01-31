import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'psycho-profile-chat-layout',
  templateUrl: './profile-chat-layout.component.html',
  styleUrls: ['./profile-chat-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileChatLayoutComponent {
  @Input() chatExpanded = false;
  @Output() hideChat = new EventEmitter();

  onBack(): void {
    this.hideChat.emit();
  }
}
