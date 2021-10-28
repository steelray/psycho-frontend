import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPsychologist } from '@psycho/core';

const mock: IPsychologist[] = [
  {
    first_name: 'ADSD',
    last_name: 'asdasdasd',
    middle_name: 'adasdasd',
    birthday: 939927600000,
    experience_since: 1539543600000,
    has_degree: true,
    phone: '998909787586',
    email: 'some@email.com',
    avatar: '/assets/img/trusted-spec-1.jpg',
    subjects: [],
    rating: 4.5,
    slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: 2,
  },
  {
    first_name: 'ADSD',
    last_name: 'asdasdasd',
    middle_name: 'adasdasd',
    birthday: 939927600000,
    experience_since: 1539543600000,
    has_degree: true,
    phone: '998909787586',
    email: 'some@email.com',
    avatar: '/assets/img/trusted-spec-1.jpg',
    subjects: [],
    rating: 4.5,
    slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: 2,
  }
];

@Component({
  selector: 'psycho-client-psychologists',
  templateUrl: './client-psychologists.component.html',
  styleUrls: ['./client-psychologists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPsychologistsComponent {
  @Input() psychologists: IPsychologist[] = mock;

}
