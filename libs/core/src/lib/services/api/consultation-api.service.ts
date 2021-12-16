import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONSULTATION_FORMAT, CONSULTATION_USER_ROLE } from '../../enums';
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
    status?: 0 | 1
  }): Observable<IClientConsultation[]> {
    return this.get(`${this.controller}?expand=client,schedule,subject`, { params });
  }

  endConsultation(consultationId: number): Observable<boolean> {
    return this.post(`${this.controller}/end-consultation/${consultationId}`);
  }

  getConsultationPrice(format: 1 | 2 | 3): Observable<number> {
    return of(format === 1 ? 2490 : 250);
  }

} 