import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPostCategory, Post } from '@psycho/core';

@Component({
  selector: 'psycho-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogLayoutComponent implements OnInit {
  @Input() categories: IPostCategory[] = [];
  @Input() relatedPosts: Post[] = [];
  @Input() isMainPage = false;
  @Input() newArticles: Post[] = [];
  @Input() sidebarAds: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
