import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PsychologistFacade } from '../psychologist.facade';

@Component({
  selector: 'psycho-psychologist',
  templateUrl: './psychologist.component.html',
  styleUrls: ['./psychologist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PsychologistFacade]
})
export class PsychologistComponent {
  readonly userData$ = this.facade.userData$;
  readonly menuItems$ = this.facade.menuItems$;
  readonly userAuthData$ = this.facade.userAuthData$;
  constructor(
    private readonly facade: PsychologistFacade
  ) { }

}
