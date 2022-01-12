import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IPostCategory, Post, PostService } from '@psycho/core';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { BlogFacade } from '../blog.facade';

@Component({
  selector: 'psycho-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BlogFacade]
})
export class BlogComponent implements OnInit {
  readonly categories$: Observable<IPostCategory[]> = this.facade.categories$;
  readonly newArticles$: Observable<Post[] | null> = this.facade.newArticles$;
  readonly relatedPosts$: Observable<Post[] | null> = this.postService.relatedPosts$; // single post related post
  readonly sidebarAds$ = this.facade.sidebarAds$;
  isMainPage$!: Observable<boolean>;
  constructor(
    private facade: BlogFacade,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.isMainPage$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(true),
      map(() => this.isMainPage())
    );
  }

  private isMainPage(): boolean {
    const url = this.router.url.substring(1);
    return url.split('/').length === 1;

  }

}
