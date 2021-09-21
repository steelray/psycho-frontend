import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISubject } from '@psycho/web/core';

@Component({
  selector: 'psycho-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectItemComponent {
  @Input() subject!: ISubject;
}
