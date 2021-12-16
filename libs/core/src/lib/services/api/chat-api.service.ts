import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService extends ApiService {

  getMessages(params: {
    receiver_id: number,
    page?: number,
    limit?: number
  }): Observable<any[]> {
    return this.post('chat-messages', params);
  }

  startMeeting(consultationId: number): Observable<any> {
    return this.post(`zoom/start-meeting`, { consultation_id: consultationId });
  }

  joinMeeting(consultationId: number): Observable<any> {
    return this.get(`zoom/join-meeting/${consultationId}`);
  }

}