import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'psycho-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingStarsComponent {
  @Input() value: number = 0;
  @Input() totalStars = 5;
  @Input() size = '26px';
  @Input() readonly = true;
  @Output() rated = new EventEmitter();


  onRate(rate: any): void {
    this.rated.emit(rate.newValue);
  }

}
