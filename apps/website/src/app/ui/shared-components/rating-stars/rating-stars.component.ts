import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'psycho-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingStarsComponent implements OnInit {
  @Input() value: number = 0;
  @Input() totalStars = 5;
  @Input() size = '30px';
  @Input() readonly = true;
  @Output() rated = new EventEmitter();

  ngOnInit(): void {
    console.log(this.totalStars);

  }


  onRate(rate: any): void {
    this.rated.emit(rate.newValue);
  }

}
