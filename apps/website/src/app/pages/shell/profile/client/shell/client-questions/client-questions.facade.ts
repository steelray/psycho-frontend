import { Injectable } from '@angular/core';
import { IClientConsultation } from '@psycho/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ClientQuestionsFacade {

  constructor(
  ) { }

  getConsultations$(receiverId: number, page = 0, status: 0 | 1 = 0): Observable<IClientConsultation[]> {
    return of([])
  }

}