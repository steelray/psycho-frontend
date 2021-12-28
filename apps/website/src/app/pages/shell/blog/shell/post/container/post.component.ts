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
export class PostComponent {
  readonly breadcrumbs$ = this.facade.breadcrumbs$;
  readonly post$ = this.facade.post$;
  constructor(
    private readonly facade: PostFacade
  ) { }




}
