import { Injectable } from '@angular/core';
import { Post, PostApiService, PostService } from '@psycho/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class PostFacade {
  constructor(
    private readonly postApiService: PostApiService,
    private readonly postService: PostService
  ) { }

  getPost(slug: string): Observable<Post> {
    return this.postApiService.fetchOne(slug).pipe(
      filter(res => !!res),
      map(post => new Post(post)),
      tap(post => {
        if (post.related_posts) {
          this.setRelatedPosts(post.related_posts);
        }
      })
    );
  }

  private setRelatedPosts(posts: Post[]): void {
    this.postService.setRelatedPosts(posts);
  }

}