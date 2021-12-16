import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISupport } from '../../interfaces/support.interface';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class SupportApiService extends ApiService {
  fetchAll(): Observable<ISupport[]> {
    return this.get(`support-messages`);
  }

  sendMessage(message: string): Observable<boolean> {
    return this.post(`support`, { message });
  }

}