import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Post } from '@psycho/core';

@Component({
  selector: 'psycho-post-item-secondary',
  templateUrl: './post-item-secondary.component.html',
  styleUrls: ['./post-item-secondary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemSecondaryComponent {
  @Input() post!: Post;
}
