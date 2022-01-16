import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPsychologist } from '@psycho/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'psycho-home-trusted-specs',
  templateUrl: './home-trusted-specs.component.html',
  styleUrls: ['./home-trusted-specs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTrustedSpecsComponent {
  @Input() psychologists: IPsychologist[] = [];
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
}
