import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClientApiService } from '../api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '@psycho/core';


@Injectable({ providedIn: 'root' })
export class ClientGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly clientApiService: ClientApiService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.clientApiService.getClientData().pipe(
      map((res: IUser) => {
        if (!res.first_name) {
          this.router.navigate(['/profile/client/complete-registration']);
          return false;
        }
        return true;
      })
    );
  }
}