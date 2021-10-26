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
        path: 'complete-registration',
        loadChildren: () => import('./shell/client-profile-form/client-profile-form.module').then(m => m.ClientProfileFormModule),
        canActivate: [CompleteRegistrationGuard]
      },
      {
        path: 'questions',
        loadChildren: () => import('./shell/client-questions/client-questions.module').then(m => m.ClientQuestionsModule),
        canActivate: [ClientGuard]
      },
      {
        path: '',
        redirectTo: 'questions'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
