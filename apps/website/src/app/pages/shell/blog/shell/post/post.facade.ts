import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISelectOption, Post, PostApiService, PostService } from '@psycho/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class PostFacade {
  private readonly _breadcrumbsItems$ = new BehaviorSubject<ISelectOption[]>([]);

  constructor(
    private readonly postApiService: PostApiService,
    private readonly postService: PostService,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  get post$(): Observable<Post> {
    return this.activatedRoute.params.pipe(
      tap(console.log),
      map(params => params.slug),
      filter(res => !!res),
      switchMap(slug => this.postApiService.fetchOne(slug)),
      map(post => new Post(post)),
      tap(post => {
        if (post.related_posts) {
          this.setRelatedPosts(post.related_posts);
        }
      }),
      tap(post => this.generateBreadcrumbItems(post))
    );
  }

  get breadcrumbs$(): Observable<ISelectOption[]> {
    return this._breadcrumbsItems$.asObservable();
  }

  private setRelatedPosts(posts: Post[]): void {
    this.postService.setRelatedPosts(posts);
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
    items.push({
      value: null,
      title: post.title
    })
    this._breadcrumbsItems$.next(items);
  }

}