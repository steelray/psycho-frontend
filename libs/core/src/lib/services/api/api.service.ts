import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpObserve } from '../../enums';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpErrorService } from '../shared/http-error.service';
import { ENVIRONMENTS } from '..';
import { IEnvironment } from '../../environments';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // tslint:disable-next-line:variable-name
  private readonly _apiEndpoint = this.env.apiEndpoint;

  constructor(
    public http: HttpClient,
    public httpErrorService: HttpErrorService,
    @Inject(ENVIRONMENTS) private env: IEnvironment
  ) { }

  public get<Response>(
    url: string,
    options?: {
      params?: Record<string, any>,
      headers?: HttpHeaders,
      observe?: HttpObserve
    }
  ): Observable<Response> {
    return this.makeRequest('get', url, options);
  }

  public post<Body, Response>(
    url: string,
    body?: Body,
    customUrl: string | null = null
  ): Observable<Response> {
    const requestBody = {
      method: url,
      params: body
    };
    return this.makeRequest('post', url, { body: requestBody }, customUrl).pipe(
      map(res => {
        if (res.result) {
          return res.result;
        } else {
          return null;
        }
      })
    );
  }

  public put<Body, Response>(
    url: string,
    body?: Body
  ): Observable<Response> {
    return this.makeRequest('put', url, { body });
  }

  public delete<Response>(
    url: string,
    options?: {
      params?: Record<string, any>,
      headers?: HttpHeaders,
      observe?: HttpObserve
    }
  ): Observable<Response> {
    return this.makeRequest('delete', url, options);
  }

  private makeRequest<Response>(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    options?: {
      body?: any;
      headers?: HttpHeaders | {
        [header: string]: string | string[];
      };
      observe?: HttpObserve;
      params?: HttpParams | {
        [param: string]: string | string[];
      };
    },
    customUrl: string | null = null
  ): Observable<any> {
    const apiUrl = this.prepareUrl(url, customUrl);
    return this.http.request(method, apiUrl, options);
  }

  private prepareUrl(action: string, customUrl: string | null): string {
    return customUrl ? customUrl : `${this._apiEndpoint}/${action}`;
  }
}

