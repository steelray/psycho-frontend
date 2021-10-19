import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsycholigistComponent } from './container/psycholigist.component';

const routes: Routes = [
  {
    path: '',
    component: PsycholigistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsycholigistRoutingModule { }
