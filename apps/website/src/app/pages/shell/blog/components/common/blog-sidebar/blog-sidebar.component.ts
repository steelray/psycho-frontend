import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Post } from '@psycho/core';

@Component({
  selector: 'psycho-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogSidebarComponent {
  @Input() newArticles: Post[] | null = [];

  trackByFn(index: number): number {
    return index;
  }

}
