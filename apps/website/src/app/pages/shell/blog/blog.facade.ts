import { Injectable } from '@angular/core';
import { CommonDataApiService, IPostCategory, Post, PostApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class BlogFacade {
  private _categories$!: Observable<IPostCategory[]>;
  private _newArticles$!: Observable<Post[] | null>;
  private _sidebarAds$!: Observable<string[]>;

  constructor(
    private readonly postApiService: PostApiService,
    private readonly commonDataApiService: CommonDataApiService
  ) { }

  get categories$(): Observable<IPostCategory[]> {

    if (!this._categories$) {
      this._categories$ = this.postApiService.getCategories({ parent_id: 2 });
    }

    return this._categories$;
  }


  get newArticles$(): Observable<Post[] | null> {
    if (!this._newArticles$) {
      this._newArticles$ = this.postApiService.fetchAll({ limit: 10, expand: 'category', category_slug: 'blog' }).pipe(
        map(res => res?.body),
        map(posts => {
          if (!posts) {
            return [];
          }
          return posts.map(post => new Post(post));
        })
      );
    }
    return this._newArticles$;
  }

  get sidebarAds$(): Observable<string[]> {
    if (!this._sidebarAds$) {
      this._sidebarAds$ = this.commonDataApiService.sidebarAds$.pipe(
        shareReplay()
      );
    }
    return this._sidebarAds$;
  }
}