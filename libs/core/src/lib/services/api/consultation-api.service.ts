import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONSULTATION_FORMAT, CONSULTATION_STATUS, CONSULTATION_USER_ROLE } from '../../enums';
import { IClientConsultation } from '../../interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultationApiService extends ApiService {
  private readonly controller = 'consultations';

  getPsychologistConsultations(): Observable<IClientConsultation[]> {
    return this.get(`${this.controller}/psychologist?expand=client,schedule`);
  }

  getConsultations(params?: {
    format: CONSULTATION_FORMAT,
    role: CONSULTATION_USER_ROLE,
    page?: number,
    limit?: number,
    status?: CONSULTATION_STATUS | CONSULTATION_STATUS[],
    expand?: string
  }): Observable<IClientConsultation[]> {
    const expand = params?.expand || 'schedule,subject';
    if (params?.expand) {
      delete params?.expand;
    }
    return this.post(`${this.controller}?expand=${expand}`, params);
  }

  startConsultation(consultationId: number): Observable<boolean> {
    return this.post(`${this.controller}/start/${consultationId}`);
  }

  endConsultation(consultationId: number): Observable<boolean> {
    return this.post(`${this.controller}/end/${consultationId}`);
  }

  getConsultationPrice(format: 1 | 2 | 3): Observable<number> {
    return of(format === 1 ? 2490 : 250);
  }

  takeToWork(id: number): Observable<boolean | any> {
    return this.post(`${this.controller}/take-to-work/${id}`);
  }

} 