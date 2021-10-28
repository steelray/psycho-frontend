import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPsychologistsComponent } from './container/client-psychologists.component';

const routes: Routes = [{ path: '', component: ClientPsychologistsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPsychologistsRoutingModule { }
