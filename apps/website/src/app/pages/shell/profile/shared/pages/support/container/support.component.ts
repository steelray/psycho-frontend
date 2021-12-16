import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SupportFacade } from '../support.facade';

@Component({
  selector: 'psycho-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SupportFacade]
})
export class SupportComponent {
  readonly messages$ = this.facade.messages$;

  message!: string;

  constructor(
    private readonly facade: SupportFacade
  ) { }

  onSendMessage(): void {
    this.facade.sendMessage(this.message);
    this.message = '';
  }

  trackByFn(index: number): number {
    return index;
  }

}
