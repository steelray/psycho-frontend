import { Injectable, NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { AuthService, ClientGuard } from '@psycho/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
class IsClientGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.userData$.pipe(
      map(data => data?.is_client || false)
    );
  }

}

@Injectable()
class IsPsychologistGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.userData$.pipe(
      map(data => data?.is_psychologist || false)
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
    // {
    //   provide: ROUTES,
    //   useFactory: routesFactory,
    //   deps: [AuthService],
    //   multi: true
    // }
  ]
})
export class ProfileRoutingModule { }
