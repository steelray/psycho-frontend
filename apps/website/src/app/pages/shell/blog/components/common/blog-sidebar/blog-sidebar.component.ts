import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Post } from '@psycho/core';

@Component({
  selector: 'psycho-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BlogSidebarComponent {
  @Input() newArticles: Post[] | null = [];
  @Input() ads: string[] = [];
  trackByFn(index: number): number {
    return index;
  }

}
