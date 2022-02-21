import { ApiService } from './api.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IPsychologist, IPsychologistSchedule, IPsychologistSearchParams } from '../../interfaces/psychologist.interface';
import { Injectable } from '@angular/core';
import { shareReplay, switchMap } from 'rxjs/operators';
import { ISubject } from '@psycho/core';

@Injectable({
  providedIn: 'root'
})
export class PsychologistApiService extends ApiService {
  private readonly controller = 'psychologists';
  private _profileData$!: Observable<IPsychologist> | null; // client data cache
  private readonly _updateProfileData$ = new BehaviorSubject<null>(null);
  fetchAll(params?: IPsychologistSearchParams): Observable<IPsychologist[]> {
    if (params) {
      params['expand'] = 'description,education';
    }
    return this.get(this.controller, { params });
  }

  fetchOne(id: number): Observable<IPsychologist> {
    return this.get(`${this.controller}/${id}?expand=description,education`);
  }

  getMonthSchedule(year: number, month: number, psychologistId: number, onlyFree = false): Observable<IPsychologistSchedule[]> {
    const params: any = {};
    if (onlyFree) {
      params['onlyFree'] = true;
    }
    return this.get(`${this.controller}/get-month-schedule/${year}/${month}/${psychologistId}`, { params });
  }

  getSchedule(psychologistId: number, start?: string, end?: string): Observable<IPsychologistSchedule[]> {
    return this.get(`${this.controller}/get-schedule/${psychologistId}`, { params: { start, end } });
  }



  getProfile(): Observable<IPsychologist> {
    return this.get<IPsychologist>(`${this.controller}/profile?expand=description,education`);
    return this._updateProfileData$.pipe(
      switchMap(() => {
        if (!this._profileData$) {
          this._profileData$ = this.get<IPsychologist>(`${this.controller}/profile?expand=description,education`).pipe(
            shareReplay()
          );
        }
        return this._profileData$;
      })
    );
  }

  // update chached data
  updateProfileData(): void {
    this._profileData$ = null;
    this._updateProfileData$.next(null);
  }

  updateSlogan(slogan: string): Observable<IPsychologist> {
    return this.post(`${this.controller}/update-slogan`, { slogan });
  }

  setSubjects(subject_ids: number[]): Observable<ISubject[]> {
    return this.post(`${this.controller}/set-subjects`, { subject_ids });
  }

  setSchedule(times: number[]): Observable<boolean> {
    return this.post(`${this.controller}/set-schedule`, { times });
  }

  removeTimeFromSchedule(unix: number): Observable<boolean> {
    return this.post(`${this.controller}/remove-time-from-schedule`, { unix })
  }

}