import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ISelectOption } from '@psycho/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

const carouselItems: ISelectOption[] = [
  {
    value: 1,
    title: 'Заполняете анкету, где расскажете, что вас беспокоит и что вам важно получить от психолга',
    img: '/assets/img/how-it-works.png'
  },
  {
    value: 1,
    title: 'Заполняете анкету, где расскажете, что вас беспокоит и что вам важно получить от психолга',
    img: '/assets/img/how-it-works.png'
  },
  {
    value: 1,
    title: 'Заполняете анкету, где расскажете, что вас беспокоит и что вам важно получить от психолга',
    img: '/assets/img/how-it-works.png'
  },
  {
    value: 1,
    title: 'Заполняете анкету, где расскажете, что вас беспокоит и что вам важно получить от психолга',
    img: '/assets/img/how-it-works.png'
  }
];

@Component({
  selector: 'psycho-home-how-it-works',
  templateUrl: './home-how-it-works.component.html',
  styleUrls: ['./home-how-it-works.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHowItWorksComponent {
  readonly carouselItems: ISelectOption[] = carouselItems;
  activeSlide!: number;
  readonly customOptions: OwlOptions = {
    items: 1,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: true,
    navText: ['', ''],
  }

  setActiveSlideNumber(e: SlidesOutputData): void {
    this.activeSlide = e?.startPosition ? e?.startPosition + 1 : 1;
  }

}
