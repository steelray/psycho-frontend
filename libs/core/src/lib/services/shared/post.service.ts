import { Injectable } from '@angular/core';
import { Post } from '@psycho/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _relatedPosts$ = new BehaviorSubject<Post[] | null>(null);

  setRelatedPosts(posts: Post[]): void {
    this._relatedPosts$.next(posts);
  }

  get relatedPosts$(): Observable<Post[] | null> {
    return this._relatedPosts$.asObservable();
  }

}