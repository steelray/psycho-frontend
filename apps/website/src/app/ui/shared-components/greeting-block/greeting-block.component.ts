import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-greeting-block',
  templateUrl: './greeting-block.component.html',
  styleUrls: ['./greeting-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingBlockComponent {
}
