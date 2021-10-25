import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService, IUserAuthData } from '@psycho/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const guestMethods = [
  'reset_password',
  'reset_password_request',
  'login',
  'signup'
];

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authorization';

  constructor(
    private readonly authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = req.headers;

    return this.authService.userData$.pipe(
      map(data => data?.token),
      switchMap((token: string | undefined) => {
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
      })
    );
  }
}
