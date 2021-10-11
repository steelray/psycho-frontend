import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPost } from '@psycho/core';

@Component({
  selector: 'psycho-home-faq',
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFaqComponent {
  @Input() faq: IPost[] = [];
  openedPanel!: number | null;

  onPanelExpand(i: number): void {
    this.openedPanel = i;
  }

  onPanelCollapse(): void {
    this.openedPanel = null;
  }

}
