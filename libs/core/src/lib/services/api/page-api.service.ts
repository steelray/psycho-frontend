import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpObserve } from '../../enums/http-observe.enum';
import { IPage } from '../../interfaces/page.interface';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PageApiService extends ApiService {
  private readonly controller = 'pages';

  fetchAll(): Observable<HttpResponse<IPage[]>> {
    return this.get(`${this.controller}`, { observe: HttpObserve.RESPONSE });
  }

  fetchOne(slug: string): Observable<IPage> {
    return this.get(slug, { params: { expand: 'content,category,related_posts' } });
  }

}