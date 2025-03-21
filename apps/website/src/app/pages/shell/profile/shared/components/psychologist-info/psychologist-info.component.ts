import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPsychologist } from '@psycho/core';

@Component({
  selector: 'psycho-psychologist-info',
  templateUrl: './psychologist-info.component.html',
  styleUrls: ['./psychologist-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistInfoComponent {
  @Input() psychologist!: IPsychologist;
}
