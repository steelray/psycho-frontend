import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const guestMethods = [
  'users.forgot_password',
  'users.login'
];

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authentication';

  constructor(
  ) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = null;
    let headers = req.headers;

    if (req.url.includes('login') || !token) {
      return next.handle(req);
    }

    if (headers.has('x-legacy')) {
      // todo remove after api-service cleanup
      headers = headers.delete('x-legacy');
      return next.handle(req.clone({ headers }));
    }

    if (token && !guestMethods.find(method => req.url.includes(method))) {
      headers = headers.append(this.AUTH_HEADER, 'Bearer ' + token);
    }
    return next.handle(req.clone({ headers }));
  }
}
