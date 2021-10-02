import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, IPostQueryParams, PostApiService } from '@psycho/core';
import { Observable } from 'rxjs';

@Injectable()
export class BlogLandingFacade {

  constructor(
    private readonly postApiService: PostApiService
  ) { }

  getPosts(params: IPostQueryParams): Observable<HttpResponse<IPost[]>> {
    return this.postApiService.fetchAll(params);
  }

}