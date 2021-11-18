import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
@Injectable()
export class TimestampInterceptor implements HttpInterceptor {
  private readonly timestampProperties = [
    'created_at',
    'updated_at',
    'datetime',
    'birthday',
    'published_at',
    'experience_since',
    'payment_datetime',
    'payed_at'
  ];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      filter((event: HttpEvent<any>) => (event instanceof HttpResponse)),
      map((res: any) => {
        res.body = this.findTimestampProperties(res.body);
        return res;
      }),
    );
  }


  private findTimestampProperties(res: any): any {
    if (Array.isArray(res)) {
      res.map(item => {
        if (Array.isArray(item)) {
          item = this.findTimestampProperties(res);
        }
        return this.convertToMS(item);
      });
    } else {
      res = this.convertToMS(res);;
    }
    return res;
  }

  private convertToMS(item: any): any {
    if (item && typeof item === 'object') {
      for (let key in item) {
        if (this.timestampProperties.includes(key)) {
          item[key] = item[key] * 1000;
        }
      }

    }
    return item;
  }

}
