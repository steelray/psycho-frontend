import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPsychologist } from '@psycho/core';

@Component({
  selector: 'psycho-psychologist-item',
  templateUrl: './psychologist-item.component.html',
  styleUrls: ['./psychologist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistItemComponent {
  @Input() psychologist!: IPsychologist;
}
