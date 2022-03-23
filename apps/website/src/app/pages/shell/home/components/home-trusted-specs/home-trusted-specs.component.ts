import { Platform } from '@angular/cdk/platform';
import { Component, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IPsychologist } from '@psycho/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'psycho-home-trusted-specs',
  templateUrl: './home-trusted-specs.component.html',
  styleUrls: ['./home-trusted-specs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTrustedSpecsComponent implements AfterViewInit {
  @Input() psychologists: IPsychologist[] = [];
  readonly customOptions: OwlOptions = {
    items: 1,
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['', ''],
  }

  @ViewChild('carousel') carouselEl!: ElementRef;

  constructor(
    private readonly platform: Platform
  ) { }

  onCarouselChange(e: any): void {
    if (this.platform.isBrowser) {
      const item = document.getElementById(`ps-${e.startPosition}`);
      if (item) {
        this.changeCarouselHeight(item);
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.platform.isBrowser) {
      const item = document.getElementById(`ps-${0}`);
      if (item) {
        this.changeCarouselHeight(item);
      }
    }
  }

  private changeCarouselHeight(activeItem: any): void {
    const itemsWrap = this.carouselEl.nativeElement.querySelector('.owl-stage-outer');
    const activeItemHeight = activeItem.offsetHeight;
    itemsWrap.style.height = `${activeItemHeight}px`;
  }
}
