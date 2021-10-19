import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends ApiService {
  private readonly controller = 'auth';

  login(phone: number, password: string): Observable<any> {
    return this.post(`${this.controller}/login`, { username: phone, password });
  }

  sendSMS(phone: number): Observable<boolean> {
    return this.post(`${this.controller}/send-sms`, { phone });
  }

  signup(body: {
    phone: number, code: number, password: string, repeat_password: string
  }): Observable<any> {
    return this.post(`${this.controller}/signup`, body);
  }

  resetPassword(code: string | number, password: string): Observable<any> {
    return this.put(`${this.controller}/reset-password`, { code, password })
  }

}