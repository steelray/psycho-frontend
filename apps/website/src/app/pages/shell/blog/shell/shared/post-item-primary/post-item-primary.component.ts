import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPost } from '@psycho/core';

@Component({
  selector: 'psycho-post-item-primary',
  templateUrl: './post-item-primary.component.html',
  styleUrls: ['./post-item-primary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemPrimaryComponent {
  @Input() post!: IPost;
}
