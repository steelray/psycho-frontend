import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Post } from '@psycho/core';
import { CarouselComponent, OwlOptions, SlideModel, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'psycho-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrls: ['./related-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RelatedPostsComponent {
  @Input() posts: Post[] = [];
  readonly customOptions: OwlOptions = {
    items: 3,
    margin: 35,
    startPosition: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: false,
    navText: ['', ''],
    center: true
  }
}
