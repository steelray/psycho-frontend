import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONSULTATION_FORMAT, CONSULTATION_FORMAT_PRICE, CONSULTATION_STATUS, CONSULTATION_USER_ROLE } from '../../enums';
import { IClientConsultation, IClientConsultationCreateBody } from '../../interfaces';
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

  getConsultationPrice(format: CONSULTATION_FORMAT): Observable<number> {
    return of([CONSULTATION_FORMAT.FORMAT_FULL_CHAT, CONSULTATION_FORMAT.FORMAT_FULL_VIDEO].includes(format) ? CONSULTATION_FORMAT_PRICE.FORMT_FULL_PRICE : CONSULTATION_FORMAT_PRICE.FORMT_EXPRESS_PRICE);
  }

  takeToWork(id: number): Observable<boolean | any> {
    return this.post(`${this.controller}/take-to-work/${id}`);
  }

  createConsultation(body: IClientConsultationCreateBody): Observable<IClientConsultation> {
    return this.post(`${this.controller}/create-consultation?expand=schedule`, body);
  }

  getConsultationPaymentStatus(id: number): Observable<string> {
    return this.get(`${this.controller}/payment-status/${id}`);
  }

} 