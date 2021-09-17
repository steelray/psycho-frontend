import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HTTP_CODES } from '../../enums';
import { HttpErrorService } from '../shared/http-error.service';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private httpErrorService: HttpErrorService,
    private router: Router,
    private ngZone: NgZone) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }

    return next.handle(request).pipe(
      map((resp: any) => {
        if (resp) {
          this.httpErrorService.error$.next('');
        }
        return resp;
      }),
      tap((resp: HttpResponse<any>) => {
        if (resp?.body?.error) {
          this.httpErrorService.error$.next(resp?.body?.error?.message);
          // backend/api errors(http status: 200)
          if ([
            HTTP_CODES.INVALID_TOKEN_1,
            HTTP_CODES.INVALID_TOKEN_2
          ].includes(resp.body.error?.code)) {
            this.logout();
            throwError(resp?.body?.error?.message);
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;

        } else {
          if ([
            HTTP_CODES.NOT_AUTHED,
            HTTP_CODES.NOT_ALLOWED
          ].includes(error.status)) {
            this.logout();
            return throwError(errorMessage);
          }


          errorMessage = error.error.message ? error.error.message : `Error Code: ${error.status}\nMessage: ${error.message}`;

        }

        this.httpErrorService.error$.next(errorMessage);

        return throwError(errorMessage);

      })
    );
  }

  private logout(): void {
    this.ngZone.run(() => {
      this.httpErrorService.error$.next({
        message: 'Ваша сессия истекла',
        cssClass: 'warning'
      });
      // TODO: logut|remove auth token
      this.router.navigate(['/auth']);
    });
  }

}
