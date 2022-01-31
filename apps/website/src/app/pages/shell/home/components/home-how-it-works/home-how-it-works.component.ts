import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ISelectOption } from '@psycho/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

const carouselItems: ISelectOption[] = [
  {
    value: 1,
    title: 'Заполняете анкету, где расскажете, <strong>что вас беспокоит и что вам важно получить</strong> от психолга',
    img: '/assets/img/hiw-1.webp'
  },
  {
    value: 1,
    title: '<strong>Выбираете специалиста</strong> и удобное время',
    img: '/assets/img/hiw-2.webp'
  },
  {
    value: 1,
    title: 'Оплачиваете сеанс, и общаетесь с психологом внутри личного кабинта и <strong>меняете свою жизнь в лучшую сторону</strong>',
    img: '/assets/img/hiw-3.webp'
  },
  {
    value: 1,
    title: '<strong>Управляте своими записями из нашего уютного личного кабинта,</strong> а мы вам напомним о вашей встрече за 24 часа и час до начала.',
    img: '/assets/img/hiw-4.webp'
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
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['', ''],
  }

  setActiveSlideNumber(e: SlidesOutputData): void {
    this.activeSlide = e?.startPosition ? e?.startPosition + 1 : 1;
  }

}
