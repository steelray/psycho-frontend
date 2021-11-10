import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import axios from 'axios';

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

  uploadAvatar(image: File, userToken: string): Promise<string> {
    const formData = new FormData();
    formData.append('image', image);
    return axios.post(`http://server.zarland.ru/api/auth/upload-avatar`, formData, this.fileUploadHeaders(userToken));
  }

  setEmail(body: { email: string }): Observable<boolean> {
    return this.post(`${this.controller}/set-email`, body);
  }

  updatePassword(body: { password: string, repeat_password: string, current_password: string }): Observable<boolean> {
    return this.post(`${this.controller}/update-password`, body);
  }

}