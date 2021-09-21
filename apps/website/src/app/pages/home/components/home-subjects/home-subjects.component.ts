import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISubject } from '@psycho/web/core';

const SUBJECTS: ISubject[] = [
  {
    title: 'Отношения в семье',
    image: '/assets/img/cat-1.png'
  },
  {
    title: 'Поиск себя и своего призвания',
    image: '/assets/img/cat-2.png'
  },
  {
    title: 'Трудности в отношениях',
    image: '/assets/img/cat-3.png'
  },
  {
    title: 'Неуверенность в себе',
    image: '/assets/img/cat-4.png'
  },
  {
    title: 'Отношения в семье',
    image: '/assets/img/cat-5.png'
  },
  {
    title: 'Отношения в семье',
    image: '/assets/img/cat-6.png'
  },
  {
    title: 'Отношения в семье',
    image: '/assets/img/cat-7.png'
  },
  {
    title: 'Отношения в семье',
    image: '/assets/img/cat-8.png'
  },
  {
    title: 'Отношения в семье',
    image: '/assets/img/cat-9.png'
  },
  {
    title: 'Отношения в семье',
    image: '/assets/img/cat-10.png'
  },
  {
    title: 'Отношения в семье',
    image: '/assets/img/cat-11.png'
  },
  {
    title: 'Отношения в семье',
    image: '/assets/img/cat-12.png'
  }
];

@Component({
  selector: 'psycho-home-subjects',
  templateUrl: './home-subjects.component.html',
  styleUrls: ['./home-subjects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSubjectsComponent implements OnInit {
  @Input() subjects: ISubject[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
