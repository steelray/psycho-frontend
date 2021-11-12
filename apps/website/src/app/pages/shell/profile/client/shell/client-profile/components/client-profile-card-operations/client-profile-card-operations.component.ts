import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CONSULTATION_FORMAT, IClientCardOperation } from '@psycho/core';

const ELEMENT_DATA: IClientCardOperation[] = [
  {
    consultation: {
      id: 1,
      psychologist: {
        first_name: 'First',
        middle_name: 'Middle',
        last_name: 'Last',
        id: 1,
      },
      schedule: {
        id: 1,
        datetime: 1636598210568
      },
      status: 1,
      price: 290,
      format: CONSULTATION_FORMAT.FORMAT_EXPRESS
    },
    status: 'Успешно',
    payment_datetime: 1636598210568,
  },
  {
    consultation: {
      id: 1,
      psychologist: {
        first_name: 'First',
        middle_name: 'Middle',
        last_name: 'Last',
        id: 1,
      },
      schedule: {
        id: 1,
        datetime: 1636598210568
      },
      status: 1,
      price: 2500,
      format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT
    },
    status: 'Возврат',
    payment_datetime: 1636598210568,
  },
  {
    consultation: {
      id: 1,
      psychologist: {
        first_name: 'First',
        middle_name: 'Middle',
        last_name: 'Last',
        id: 1,
      },
      schedule: {
        id: 1,
        datetime: 1636598210568
      },
      status: 1,
      price: 290,
      format: CONSULTATION_FORMAT.FORMAT_EXPRESS
    },
    status: 'Успешно',
    payment_datetime: 1636598210568,
  },
  {
    consultation: {
      id: 1,
      psychologist: {
        first_name: 'First',
        middle_name: 'Middle',
        last_name: 'Last',
        id: 1,
      },
      schedule: {
        id: 1,
        datetime: 1636598210568
      },
      status: 1,
      price: 2500,
      format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT
    },
    status: 'Успешно',
    payment_datetime: 1636598210568,
  },
  {
    consultation: {
      id: 1,
      psychologist: {
        first_name: 'First',
        middle_name: 'Middle',
        last_name: 'Last',
        id: 1,
      },
      schedule: {
        id: 1,
        datetime: 1636598210568
      },
      status: 1,
      price: 290,
      format: CONSULTATION_FORMAT.FORMAT_EXPRESS
    },
    status: 'Возврат',
    payment_datetime: 1636598210568,
  },
  {
    consultation: {
      id: 1,
      psychologist: {
        first_name: 'First',
        middle_name: 'Middle',
        last_name: 'Last',
        id: 1,
      },
      schedule: {
        id: 1,
        datetime: 1636598210568
      },
      status: 1,
      price: 290,
      format: CONSULTATION_FORMAT.FORMAT_EXPRESS
    },
    status: 'Успешно',
    payment_datetime: 1636598210568,
  }
];

@Component({
  selector: 'psycho-client-profile-card-operations',
  templateUrl: './client-profile-card-operations.component.html',
  styleUrls: ['./client-profile-card-operations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileCardOperationsComponent {
  @Input() operations: IClientCardOperation[] = ELEMENT_DATA;

  readonly displayedColumns = ['session', 'price', 'payment_datetime', 'status'];
  readonly formats = CONSULTATION_FORMAT;

}
