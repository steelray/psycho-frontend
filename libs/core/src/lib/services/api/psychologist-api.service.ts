import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { IPsychologist, IPsychologistSchedule, IPsychologistSearchParams } from '../../interfaces/psychologist.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PsychologistApiService extends ApiService {
  private readonly controller = 'psychologists';

  fetchAll(params?: IPsychologistSearchParams): Observable<IPsychologist[]> {
    return this.get(this.controller, { params });
  }

  fetchOne(id: number): Observable<IPsychologist> {
    return this.get(`${this.controller}/${id}`);
  }

  getMonthSchedule(year: number, month: number, psychologistId: number): Observable<IPsychologistSchedule[]> {
    return this.get(`${this.controller}/get-month-schedule/${year}/${month}/${psychologistId}`);
  }

  getConsultationPrice(format: 1 | 2 | 3): Observable<number> {
    return of(format === 1 ? 2490 : 250);
  }

}