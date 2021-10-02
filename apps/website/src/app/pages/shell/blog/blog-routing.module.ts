import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './container/blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: ':category/:post',
        loadChildren: () => import('./shell/post/post.module').then(m => m.PostModule)
      },
      {
        path: ':category',
        loadChildren: () => import('./shell/blog-landing/blog-landing.module').then(m => m.BlogLandingModule)
      },
      {
        path: '',
        loadChildren: () => import('./shell/blog-landing/blog-landing.module').then(m => m.BlogLandingModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
