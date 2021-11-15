import { Injectable, NgModule } from '@angular/core';
import { CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from '@psycho/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
class IsClientGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.userData$.pipe(
      map(data => data?.is_client || false),
      tap(res => !res && this.router.navigate(['/profile', 'psychologist']))
    );
  }

}

@Injectable()
class IsPsychologistGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router

  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.userData$.pipe(
      map(data => data?.is_psychologist || false),
      tap(res => !res && this.router.navigate(['/profile', 'psychologist']))
    );
  }

}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
        canActivate: [IsClientGuard]
      },
      {
        path: 'psychologist',
        loadChildren: () => import('./psychologist/psychologist.module').then(m => m.PsychologistModule),
        canActivate: [IsPsychologistGuard]
      },
      {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    IsClientGuard,
    IsPsychologistGuard
  ]
})
export class ProfileRoutingModule { }
