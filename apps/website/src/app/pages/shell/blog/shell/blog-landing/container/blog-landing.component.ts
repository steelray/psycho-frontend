import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogLandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
