import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClientApiService } from '../api';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IClient } from '@psycho/core';


@Injectable({ providedIn: 'root' })
export class ClientGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly clientApiService: ClientApiService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.clientApiService.getClientData().pipe(
      map((res: IClient) => {

        if (!res?.user?.first_name) {
          this.router.navigate(['/profile/complete-registration']);
          return false;
        }
        return true;
      })
    );
  }
}