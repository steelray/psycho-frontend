import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Post } from '@psycho/core';
import { Observable } from 'rxjs';
import { PostFacade } from './post.facade';

@Injectable({
  providedIn: 'root'
})
export class PostResolver {

  constructor(
    private readonly facade: PostFacade,
    private readonly router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> {
    return this.facade.getPost(route.params?.slug);
  }

}