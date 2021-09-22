import { Injectable } from '@angular/core';
import { ISubject } from '@psycho/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class SubjectApiService extends ApiService {

  getSubjects(): Observable<ISubject[]> {
    return this.get('subjects');
  }


}

