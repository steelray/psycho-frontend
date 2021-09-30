import { Injectable } from '@angular/core';
import { IPostCategory, PostApiService } from '@psycho/core';
import { Observable } from 'rxjs';

@Injectable()
export class BlogFacade {
  private _categories$!: Observable<IPostCategory[]>;

  constructor(
    private postApiService: PostApiService
  ) { }

  get categories$(): Observable<IPostCategory[]> {

    if (!this._categories$) {
      this._categories$ = this.postApiService.getCategories({ parent_id: 2 });
    }

    return this._categories$;
  }
}