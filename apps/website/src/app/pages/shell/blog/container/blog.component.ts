import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IPostCategory } from '@psycho/core';
import { Observable } from 'rxjs';
import { BlogFacade } from '../blog.facade';

@Component({
  selector: 'psycho-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BlogFacade]
})
export class BlogComponent {
  readonly categories$: Observable<IPostCategory[]> = this.facade.categories$;
  constructor(
    private facade: BlogFacade
  ) { }
}
