import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPsychologist } from '@psycho/core';

@Component({
  selector: 'psycho-home-trusted-specs',
  templateUrl: './home-trusted-specs.component.html',
  styleUrls: ['./home-trusted-specs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTrustedSpecsComponent implements OnInit {
  @Input() specialists: IPsychologist[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
