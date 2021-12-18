import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSessionComponent } from './container/new-session.component';

const routes: Routes = [{ path: '', component: NewSessionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewSessionRoutingModule { }
