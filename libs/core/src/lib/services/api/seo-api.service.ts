import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISeo } from '../../interfaces/seo.interface';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class SeoApiService extends ApiService {

  getSeo(url: string): Observable<ISeo> {
    return this.get<ISeo>(`seo?url=${url}`);
  }


}

