import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISelectOption, Post } from '@psycho/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { PostFacade } from '../post.facade';

@Component({
  selector: 'psycho-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PostFacade]
})
export class PostComponent implements OnInit {
  breadcrumbsItems$ = new BehaviorSubject<ISelectOption[]>([]);
  post$!: Observable<Post>;
  constructor(
    private readonly facade: PostFacade,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.post$ = this.activatedRoute.params.pipe(
      map(params => params.post),
      filter(res => !!res),
      switchMap(slug => this.facade.getPost(slug)),
      tap(post => this.generateBreadcrumbItems(post))
    )
  }

  private generateBreadcrumbItems(post: Post): void {
    const items: ISelectOption[] = [];
    const category = post.category;

    if (category) {
      items.push({
        value: ['/blog', category.slug],
        title: category.title
      })
    }
    items.push({
      value: null,
      title: post.title
    })
    this.breadcrumbsItems$.next(items);
  }

}
