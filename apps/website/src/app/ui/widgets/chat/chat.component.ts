import { Component, OnInit, ChangeDetectionStrategy, Inject, Input } from '@angular/core';
import { ENVIRONMENTS, IEnvironment, IUser, WSService } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'psycho-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent extends WithDestroy() implements OnInit {
  @Input() user!: IUser;
  @Input() chatPartner!: IUser;

  constructor(
    @Inject(ENVIRONMENTS) private readonly env: IEnvironment,
    private readonly wsSevice: WSService
  ) {
    super();
  }

  ngOnInit(): void {
    this.wsSevice.afterOpen$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(console.log)

  }

}
