import { Injectable } from '@angular/core';
import { ISubject } from '@psycho/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class SubjectApiService extends ApiService {

  getSubjects(fixed = false, expandPage = false): Observable<ISubject[]> {
    const params: any = {};
    if (fixed) {
      params['fixed'] = 1;
    }
    if (expandPage) {
      params['expand'] = 'page';
    }
    return this.get('subjects', { params });
  }


}

