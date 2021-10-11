import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { defaultImage } from '@psycho/core';

@Component({
  selector: 'psycho-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent {
  @Input() origin!: string | undefined;
  @Input() webp!: string | undefined;
  @Input() alt!: string;
  readonly defaultImage = defaultImage;

}
