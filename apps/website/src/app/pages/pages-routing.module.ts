import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './container/pages.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./shell/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'tests',
        loadChildren: () => import('./shell/tests/tests.module').then(m => m.TestsModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./shell/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('./shell/contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./shell/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }