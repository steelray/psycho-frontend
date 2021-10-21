import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ZoomApiService extends ApiService {
  private readonly controller = 'zoom';

  generateAccessToken(): Observable<string> {
    return this.post(`${this.controller}/generate-token`);
  }

}