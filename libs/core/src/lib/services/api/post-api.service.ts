import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpObserve } from '../../enums/http-observe.enum';
import { IPost, IPostQueryParams, IPostCategory } from '../../interfaces/post.interface';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PostApiService extends ApiService {
  private readonly controller = 'posts';

  fetchAll(params: IPostQueryParams): Observable<HttpResponse<IPost[]>> {
    return this.get(`${this.controller}`, { params, observe: HttpObserve.RESPONSE });
  }

  fetchOne(slug: string, params?: { expand?: string, menu?: string | null }): Observable<IPost> {
    if (!params) {
      params = {};
    }
    params = { expand: 'content,category,related_posts', ...params };

    return this.get(`page/${slug}`, { params });
  }

  getCategories(params?: { parent_id: number }): Observable<IPostCategory[]> {
    return this.get('categories', { params });
  }

  getCategory(slug: string): Observable<IPostCategory> {
    return this.get(`categories/${slug}`);
  }

  updatePostView(slug: string): Observable<boolean> {
    return this.post(`${this.controller}/view-count`, { slug });
  }

}