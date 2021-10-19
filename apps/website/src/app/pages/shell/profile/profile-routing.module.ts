import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { AuthService, IUserAuthData } from '@psycho/core';
import { switchMap } from 'rxjs/operators';

function routesFactory(service: AuthService): Routes {
  return [
    {
      path: '',
      loadChildren: () => {
        return service.userData$.pipe(
          switchMap((res: IUserAuthData | null) => {
            if (res?.is_client) {
              return import('./client/client.module').then(m => m.ClientModule)
            }
            return import('./psycholigist/psycholigist.module').then(m => m.PsycholigistModule)
          })
        );
      }
    }
  ]
}

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: routesFactory,
      deps: [AuthService],
      multi: true
    }
  ]
})
export class ProfileRoutingModule { }
