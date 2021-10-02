import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-blog-description',
  templateUrl: './blog-description.component.html',
  styleUrls: ['./blog-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
