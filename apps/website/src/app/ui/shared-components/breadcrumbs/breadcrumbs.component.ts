import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISelectOption } from '@psycho/core';

@Component({
  selector: 'psycho-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  @Input() items: ISelectOption[] | null = [];
}
