import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService extends ApiService {

  getMessages(params: {
    id: number,
    page?: number,
    limit?: number
  }): Observable<any[]> {
    return this.post('chat-messages', params);
  }

  getZoomSignature(): Observable<string> {
    return this.post('zoom/generate-token');
  }

}