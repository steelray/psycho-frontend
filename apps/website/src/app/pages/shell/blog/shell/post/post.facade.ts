import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISelectOption, Post, PostApiService } from '@psycho/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class PostFacade {
  private readonly _breadcrumbsItems$ = new BehaviorSubject<ISelectOption[]>([]);

  constructor(
    private readonly postApiService: PostApiService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  get post$(): Observable<Post> {
    return this.activatedRoute.params.pipe(
      switchMap(params => this.getPost(params?.slug, params?.menu))
    );
  }

  get breadcrumbs$(): Observable<ISelectOption[]> {
    return this._breadcrumbsItems$.asObservable();
  }

  getPost(slug: string, menu?: string): Observable<Post> {
    const params = menu ? { menu } : {};
    return this.postApiService.fetchOne(slug, params).pipe(
      switchMap(post => {
        if (post?.author) {
          return this.updatePostView(post.slug).pipe(
            map(res => {
              if (res) {
                post.views = post.views ? post.views + 1 : 1;
              }
              return post;
            })
          )
        }
        return of(post);
      }),
      map(post => new Post(post)),
      tap(post => this.generateBreadcrumbItems(post)),
    );
  }

  private updatePostView(slug: string): Observable<boolean> {
    return this.postApiService.updatePostView(slug);
  }

  private generateBreadcrumbItems(post: Post): void {
    const items: ISelectOption[] = [];
    const category = post.category;

    if (category) {
      items.push({
        value: ['/blog', category.slug],
        title: category.title
      })
    }
    // console.log(post);

    items.push({
      value: null,
      title: post.title
    });

    this._breadcrumbsItems$.next(items);
  }

}