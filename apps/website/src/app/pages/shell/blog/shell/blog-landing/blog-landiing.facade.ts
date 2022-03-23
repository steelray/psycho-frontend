import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, IPostCategory, IPostQueryParams, Post, PostApiService } from '@psycho/core';
import { getTotalCountFromRes } from '@psycho/utils';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class BlogLandingFacade {
  readonly postsLimit = 10;
  readonly updatePosts$ = new BehaviorSubject<null>(null);
  readonly currentPage$ = new BehaviorSubject<number>(this.activatedRoute.snapshot.queryParams?.page || 1);
  readonly currentCategory$ = new BehaviorSubject<IPostCategory | null>(null);
  totalCount$ = new BehaviorSubject<number>(0);
  constructor(
    private readonly postApiService: PostApiService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly location: Location,
  ) {
  }

  get posts$(): Observable<Post[] | null> {
    return combineLatest([
      this.activatedRoute.params,
      this.currentPage$
    ]).pipe(
      map(res => ({
        categorySlug: res[0]?.category || 'blog',
        currentPage: res[1]
      })),
      tap(res => this.changePageParam(res.currentPage)),
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

  get categorySlug$(): Observable<string> {
    return this.activatedRoute.params.pipe(
      map(params => params.category)
    );
  }

  getCategory(slug: string): Observable<IPostCategory> {
    return this.postApiService.getCategory(slug);
  }

  goToPage(page: number): void {
    this.currentPage$.next(page);
  }

  private changePageParam(newPage: number): void {
    console.log(newPage);

    const path = this.location.path();

    const newPath = newPage > 1 ? this.replaceUrlParam(path, 'page', newPage) : this.removeParam('page', path);

    this.location.replaceState(newPath);
  }

  private getPosts(params: IPostQueryParams): Observable<HttpResponse<IPost[] | null>> {
    return this.postApiService.fetchAll({ ...params, skipNew: 1 });
  }

  private get paginationParams(): { page: number, limit: number } {
    return { page: this.currentPage$.getValue() - 1, limit: this.postsLimit }
  }

  private replaceUrlParam(url: string, paramName: string, paramValue: string | number) {
    if (paramValue == null) {
      paramValue = '';
    }
    const pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
    if (url.search(pattern) >= 0) {
      return url.replace(pattern, '$1' + paramValue + '$2');
    }
    url = url.replace(/[?#]$/, '');
    return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
  }

  private removeParam(key: string, sourceURL: string) {
    var rtn = sourceURL.split("?")[0],
      param,
      params_arr = [],
      queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
      params_arr = queryString.split("&");
      for (var i = params_arr.length - 1; i >= 0; i -= 1) {
        param = params_arr[i].split("=")[0];
        if (param === key) {
          params_arr.splice(i, 1);
        }
      }
      if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
  }

}