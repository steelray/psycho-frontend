import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CONSULTATION_FORMAT, IPsychologistOutput } from '@psycho/core';

const mock: IPsychologistOutput[] = [
  {
    payed_at: 1637078240767,
    id: 1,
    amount: 2500,
    consultation: {
      id: 1,
      status: 1,
      format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT,
    }
  },
  {
    payed_at: 1637078240767,
    id: 1,
    amount: 2500,
    consultation: {
      id: 1,
      status: 1,
      format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT,
    }
  },
  {
    payed_at: 1637078240767,
    id: 1,
    amount: 2500,
    consultation: {
      id: 1,
      status: 1,
      format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT,
    }
  },
  {
    payed_at: 1637078240767,
    id: 1,
    amount: 2500,
    consultation: {
      id: 1,
      status: 1,
      format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT,
    }
  }
];

@Component({
  selector: 'psycho-psychologist-finances',
  templateUrl: './psychologist-finances.component.html',
  styleUrls: ['./psychologist-finances.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistFinancesComponent implements OnInit {
  readonly date = new Date();
  readonly outputs: IPsychologistOutput[] = mock;
  readonly displayedColumns: ReadonlyArray<string> = ['payed_at', 'consultation', 'amount'];
  readonly formats = CONSULTATION_FORMAT;
  constructor() { }

  ngOnInit(): void {
  }

}
