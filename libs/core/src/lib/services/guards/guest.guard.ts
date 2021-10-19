import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@psycho/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GuestGuardService implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthed$.pipe(
      map(res => {
        if (res) {
          this.router.navigate(['/profile']);
          return false;
        }
        return true;
      })
    )
  }
}
