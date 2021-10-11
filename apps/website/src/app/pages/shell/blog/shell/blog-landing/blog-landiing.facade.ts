import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, IPostCategory, IPostQueryParams, Post, PostApiService } from '@psycho/core';
import { getTotalCountFromRes } from '@psycho/utils';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class BlogLandingFacade {
  readonly postsLimit = 10;
  readonly updatePosts$ = new BehaviorSubject<null>(null);
  readonly currentPage$ = new BehaviorSubject<number>(1);
  readonly currentCategory$ = new BehaviorSubject<IPostCategory | null>(null);
  totalCount$ = new BehaviorSubject<number>(0);
  constructor(
    private readonly postApiService: PostApiService
  ) { }

  get posts$(): Observable<Post[] | null> {
    return combineLatest([
      this.currentCategory$,
      this.currentPage$
    ]).pipe(
      map(res => ({
        categorySlug: res[0]?.slug,
        currentPage: res[1]
      })),
      map(res => ({ category_slug: res.categorySlug })),
      map(params => ({ ...params, ...this.paginationParams, expand: 'category' })),
      switchMap(params => this.getPosts(params)),
      tap(res => this.totalCount$.next(getTotalCountFromRes(res.headers))),
      map(res => res.body),
      map((posts: IPost[] | null) => {
        if (!posts) {
          return [];
        }
        return posts.map((post: IPost) => new Post(post));
      })
    );
  }

  getCategory(slug: string): Observable<IPostCategory> {
    return this.postApiService.getCategory(slug);
  }

  private getPosts(params: IPostQueryParams): Observable<HttpResponse<IPost[] | null>> {
    return this.postApiService.fetchAll({ ...params, skipNew: 1 });
  }

  private get paginationParams(): { page: number, limit: number } {
    return { page: this.currentPage$.getValue() - 1, limit: this.postsLimit }
  }

}