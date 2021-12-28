import { Injectable } from '@angular/core';
import { IPostCategory, Post, PostApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BlogFacade {
  private _categories$!: Observable<IPostCategory[]>;
  private _newArticles$!: Observable<Post[] | null>;

  constructor(
    private readonly postApiService: PostApiService
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
}