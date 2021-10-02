import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
