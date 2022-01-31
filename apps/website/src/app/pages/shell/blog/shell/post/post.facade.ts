import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISelectOption, Post, PostApiService } from '@psycho/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
    return this.activatedRoute.data.pipe(
      tap(data => console.log(data)),
      map(data => data?.post)
    );
  }

  get breadcrumbs$(): Observable<ISelectOption[]> {
    return this._breadcrumbsItems$.asObservable();
  }

  getPost(slug: string): Observable<Post> {
    return this.postApiService.fetchOne(slug).pipe(
      map(post => new Post(post)),
      tap(post => this.generateBreadcrumbItems(post))
    );
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