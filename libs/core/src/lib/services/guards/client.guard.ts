import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '..';


@Injectable({ providedIn: 'root' })
export class ClientGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.userData$.pipe(
      map(res => {
        if (!res?.registration_completed) {
          this.router.navigate(['/profile/client/complete-registration']);
          return false;
        }
        return true;
      })
    );
  }
}