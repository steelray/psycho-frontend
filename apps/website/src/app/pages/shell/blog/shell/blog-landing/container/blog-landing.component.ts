import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '@psycho/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlogLandingFacade } from '../blog-landiing.facade';

@Component({
  selector: 'psycho-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BlogLandingFacade]
})
export class BlogLandingComponent {
  posts$: Observable<Post[] | null> = this.facade.posts$;
  totalCount$ = this.facade.totalCount$;
  page$ = this.facade.currentPage$;
  readonly limit = this.facade.postsLimit;
  readonly updateList$ = new BehaviorSubject<null>(null);
  readonly categorySlug$ = this.facade.categorySlug$;

  constructor(
    private readonly facade: BlogLandingFacade,
    private readonly router: Router
  ) {
  }

  onPageChange(page: any): void {
    this.facade.goToPage(page);
  }

  trackByFn(index: number): number {
    return index;
  }



}
