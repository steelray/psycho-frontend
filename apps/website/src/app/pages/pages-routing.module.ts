import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, GuestGuardService } from '@psycho/core';
import { PagesComponent } from './container/pages.component';
import { PostResolver } from './shell/blog/shell/post/post.resolver';
import { PageNotFoundComponent } from './shell/not-found/page-not-found.component';

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
        path: 'auth',
        loadChildren: () => import('./shell/auth/auth.module').then(m => m.AuthModule),
        canActivate: [GuestGuardService]
      },
      {
        path: 'profile',
        loadChildren: () => import('./shell/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
      },
      {
        path: '404',
        component: PageNotFoundComponent
      },
      // {
      //   path: ':slug',
      //   loadChildren: () => import('./shell/blog/shell/post/post.module').then(m => m.PostModule),
      //   // resolve: {
      //   //   post: PostResolver
      //   // }
      // },
      // {
      //   path: ':menu/:slug',
      //   loadChildren: () => import('./shell/blog/shell/post/post.module').then(m => m.PostModule),
      //   // resolve: {
      //   //   post: PostResolver
      //   // }
      // },
      // {
      //   path: ':slug',
      //   loadChildren: () => import('./shell/blog/shell/post/post.module').then(m => m.PostModule),
      //   // resolve: {
      //   //   post: PostResolver
      //   // }
      // },
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