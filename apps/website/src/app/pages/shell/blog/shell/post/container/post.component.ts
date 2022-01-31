import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BlogFacade } from '../../../blog.facade';
import { PostFacade } from '../post.facade';

@Component({
  selector: 'psycho-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PostFacade, BlogFacade]
})
export class PostComponent {
  readonly breadcrumbs$ = this.facade.breadcrumbs$;
  readonly post$ = this.facade.post$;
  readonly newArticles$ = this.blogFacade.newArticles$;
  readonly categories$ = this.blogFacade.categories$;
  readonly sidebarAds$ = this.blogFacade.sidebarAds$;
  constructor(
    private readonly facade: PostFacade,
    private readonly blogFacade: BlogFacade
  ) {
  }




}
