import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IContacts } from '@psycho/core';

@Component({
  selector: 'psycho-home-feedback',
  templateUrl: './home-feedback.component.html',
  styleUrls: ['./home-feedback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeedbackComponent {
  @Input() contacts!: IContacts;
}
