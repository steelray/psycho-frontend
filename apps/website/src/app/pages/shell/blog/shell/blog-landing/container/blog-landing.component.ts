import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPostCategory, Post } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { BlogLandingFacade } from '../blog-landiing.facade';

@Component({
  selector: 'psycho-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BlogLandingFacade]
})
export class BlogLandingComponent extends WithDestroy() implements OnInit {
  category$!: Observable<IPostCategory>; // current category title(if category param isset in route)
  posts$: Observable<Post[] | null> = this.facade.posts$;
  totalCount$ = this.facade.totalCount$;
  page$ = this.facade.currentPage$;
  readonly limit = 13;
  readonly updateList$ = new BehaviorSubject<null>(null);

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly facade: BlogLandingFacade
  ) {
    super();
  }

  ngOnInit(): void {
    this.category$ = this.activatedRoute.params.pipe(
      map(params => params.category || 'blog'),
      switchMap(category => {
        return this.facade.getCategory(category);
      }),
      filter(res => !!res),
      tap(category => this.facade.currentCategory$.next(category))
    )
  }

  onPageChange(page: any): void {
    this.facade.currentPage$.next(page);
  }

  trackByFn(index: number): number {
    return index;
  }



}
