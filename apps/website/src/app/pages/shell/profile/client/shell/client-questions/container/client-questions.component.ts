import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psycho-client-questions',
  templateUrl: './client-questions.component.html',
  styleUrls: ['./client-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientQuestionsComponent {
  selectedItem: any;

  onSelect(e: any): void {
    this.selectedItem = e;
  }

}
