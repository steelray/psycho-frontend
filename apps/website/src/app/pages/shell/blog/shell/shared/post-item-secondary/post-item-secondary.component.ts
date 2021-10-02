import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-post-item-secondary',
  templateUrl: './post-item-secondary.component.html',
  styleUrls: ['./post-item-secondary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemSecondaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
