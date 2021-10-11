import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPostCategory } from '@psycho/core';

@Component({
  selector: 'psycho-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogHeaderComponent implements OnInit {
  @Input() categories: IPostCategory[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
