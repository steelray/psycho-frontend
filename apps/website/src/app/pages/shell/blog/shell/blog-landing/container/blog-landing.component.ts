import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '@psycho/core';
import { getTotalCountFromRes, WithDestroy } from '@psycho/utils';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BlogLandingFacade } from '../blog-landiing.facade';

@Component({
  selector: 'psycho-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BlogLandingFacade]
})
export class BlogLandingComponent extends WithDestroy() implements OnInit {
  posts$!: Observable<IPost[] | null>;
  totalCount!: number;
  page = 1;
  readonly limit = 13;
  readonly updateList$ = new BehaviorSubject<null>(null);

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly facade: BlogLandingFacade
  ) {
    super();
  }

  ngOnInit(): void {
    this.getPosts();
  }

  onPageChange(page: number): void {
    this.page = page;
    this.updateList$.next(null);
  }

  trackByFn(index: number): number {
    return index;
  }

  private getPosts(): void {
    this.posts$ = combineLatest([
      this.activatedRoute.params,
      this.updateList$
    ]).pipe(
      map(res => res[0]),
      map(params => params?.category),
      map(category => {
        return category ? { category_slug: category } : {};
      }),
      map(params => ({ ...params, ...this.paginationParams, expand: 'category' })),
      switchMap(params => this.facade.getPosts(params)),
      tap(res => this.totalCount = getTotalCountFromRes(res.headers)),
      map(res => res.body)
    );
  }

  private get paginationParams(): { page: number, limit: number } {
    return { page: this.page - 1, limit: this.limit }
  }

}
