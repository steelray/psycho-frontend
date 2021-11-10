import { Injectable } from '@angular/core';
import { ClientApiService, ConsultationApiService, IClientConsultation } from '@psycho/core';
import { Observable } from 'rxjs';
import { filter, shareReplay } from 'rxjs/operators';

@Injectable()
export class ClientQuestionsFacade {

  constructor(
    private readonly consultationApiService: ConsultationApiService
  ) { }

  getConsultations$(receiverId: number, page = 0, status: 0 | 1 = 0): Observable<IClientConsultation[]> {
    return this.consultationApiService.fetchAll({ receiver_id: receiverId, page, limit: 20, expand: 'client,psychologist,status', status }).pipe(
      shareReplay()
    );
  }

}