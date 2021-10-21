import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IPsychologist } from '@psycho/core';

@Component({
  selector: 'psycho-psychologist-card',
  templateUrl: './psychologist-card.component.html',
  styleUrls: ['./psychologist-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistCardComponent {
  @Input() psychologist!: IPsychologist | null;
  @Input() chooseBtn = false;
  @Input() isChoosed!: boolean;
  @Output() choosed = new EventEmitter();

  onChoose(id: number): void {
    this.choosed.emit(this.isChoosed ? null : id);
  }

}
