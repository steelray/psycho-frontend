import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IPsychologist, IPsychologistSearchParams } from '../../interfaces/psychologist.interface';
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

}