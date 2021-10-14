import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends ApiService {
  private readonly controller = 'auth';

  login(phone: number, password: string): Observable<any> {
    return this.post(`${this.controller}/login`, { phone, password });
  }

  sendSMS(phone: number): Observable<string> {
    return this.post(`${this.controller}/auth`, { phone });
  }

  signup(code: string | number, password: string): Observable<any> {
    return this.post(`${this.controller}/signup`, { code, password });
  }

  resetPassword(code: string | number, password: string): Observable<any> {
    return this.put(`${this.controller}/reset-password`, { code, password })
  }

}