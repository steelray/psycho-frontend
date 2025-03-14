import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import axios from 'axios';
import { IUserAuthData } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends ApiService {
  private readonly controller = 'auth';

  login(username: number | string, password: string): Observable<IUserAuthData> {
    return this.post(`${this.controller}/login`, { username, password });
  }

  sendSMS(phone: number): Observable<boolean> {
    return this.post(`${this.controller}/send-sms`, { phone });
  }

  signup(body: {
    phone: number, code: number, password: string, repeat_password: string
  }): Observable<any> {
    return this.post(`${this.controller}/signup`, body);
  }

  resetPassword(phone: number): Observable<IUserAuthData> {
    return this.post(`${this.controller}/reset-password`, { phone })
  }

  resetPasswordRequest(code: string | number, password: string, repeat_password: string): Observable<any> {
    return this.post(`${this.controller}/reset-password-request`, { code, password, repeat_password })
  }

  uploadAvatar(image: File, userToken: string): Promise<any> {
    const formData = new FormData();
    formData.append('image', image);
    return axios.post(`${this.env.apiEndpoint}/auth/upload-avatar`, formData, this.fileUploadHeaders(userToken));
  }

  setEmail(body: { email: string }): Observable<boolean> {
    return this.post(`${this.controller}/set-email`, body);
  }

  updatePassword(body: { password: string, repeat_password: string, current_password: string }): Observable<boolean> {
    return this.post(`${this.controller}/update-password`, body);
  }

}