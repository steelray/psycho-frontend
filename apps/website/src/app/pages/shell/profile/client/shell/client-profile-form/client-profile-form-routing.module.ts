import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileFormComponent } from './container/client-profile-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClientProfileFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientProfileFormRoutingModule { }
