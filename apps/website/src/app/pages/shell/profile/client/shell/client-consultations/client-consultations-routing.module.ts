import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientConsultationsComponent } from './container/client-consultations.component';

const routes: Routes = [{
  path: '',
  component: ClientConsultationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientConsultationsRoutingModule { }
