import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, ROUTES, Routes } from '@angular/router';
import { BlogComponent } from './container/blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'category/:category',
        loadChildren: () => import('./shell/blog-landing/blog-landing.module').then(m => m.BlogLandingModule)
      },
      {
        path: ':post',
        loadChildren: () => import('./shell/post/post.module').then(m => m.PostModule)
      },
      {
        path: '',
        loadChildren: () => import('./shell/blog-landing/blog-landing.module').then(m => m.BlogLandingModule)
      },
    ]
  }
];


function routesFactory(route: ActivatedRoute): Routes {
  console.log(route.snapshot.params);

  return [
    {
      path: 'cml',
      loadChildren: () => {
        // tslint:disable-next-line:no-magic-numbers
        return /*Math.random() < 0.5*/ true
          ? import('./shell/blog-landing/blog-landing.module').then(m => m.BlogLandingModule)
          : import('./shell/post/post.module').then(m => m.PostModule);
      }
    }
  ];
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: routesFactory,
      deps: [ActivatedRoute],
      multi: true
    }
  ]
})
export class BlogRoutingModule { }
