import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientGuard, CompleteRegistrationGuard } from '@psycho/core';
import { ClientComponent } from './container/client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./shell/client-profile/client-profile.module').then(m => m.ClientProfileModule),
        canActivate: [ClientGuard]
      },
      {
        path: 'complete-registration',
        loadChildren: () => import('./shell/client-profile-form/client-profile-form.module').then(m => m.ClientProfileFormModule),
        canActivate: [CompleteRegistrationGuard]
      },
      {
        path: 'new-session',
        loadChildren: () => import('./shell/new-session/new-session.module').then(m => m.NewSessionModule),
        canActivate: [ClientGuard]
      },
      {
        path: 'psychologists',
        loadChildren: () => import('./shell/client-psychologists/client-psychologists.module').then(m => m.ClientPsychologistsModule),
        canActivate: [ClientGuard]
      },
      {
        path: 'support',
        loadChildren: () => import('../shared/pages/support/support.module').then(m => m.SupportModule)
      },
      {
        path: 'consultations',
        loadChildren: () => import('../shared/pages/consultations/consultations.module').then(m => m.ConsultationsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
