import { ApiService } from './api.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IPsychologist, IPsychologistSchedule, IPsychologistSearchParams } from '../../interfaces/psychologist.interface';
import { Injectable } from '@angular/core';
import { shareReplay, switchMap } from 'rxjs/operators';
import { CONSULTATION_FORMAT, IClientConsultation, ISubject } from '@psycho/core';

@Injectable({
  providedIn: 'root'
})
export class PsychologistApiService extends ApiService {
  private readonly controller = 'psychologists';
  private _profileData$!: Observable<IPsychologist> | null; // client data cache
  private readonly _updateProfileData$ = new BehaviorSubject<null>(null);
  fetchAll(params?: IPsychologistSearchParams): Observable<IPsychologist[]> {
    return this.get(this.controller, { params });
  }

  fetchOne(id: number): Observable<IPsychologist> {
    return this.get(`${this.controller}/${id}`);
  }

  getMonthSchedule(year: number, month: number, psychologistId: number): Observable<IPsychologistSchedule[]> {
    return this.get(`${this.controller}/get-month-schedule/${year}/${month}/${psychologistId}`);
  }

  getSchedule(psychologistId: number, start?: string, end?: string): Observable<IPsychologistSchedule[]> {
    return this.get(`${this.controller}/get-schedule/${psychologistId}`, { params: { start, end } });
  }

  getConsultationPrice(format: 1 | 2 | 3): Observable<number> {
    return of(format === 1 ? 2490 : 250);
  }

  getProfile(): Observable<IPsychologist> {
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
    return this.delete(`${this.controller}/remove-time-from-schedule/${unix}`)
  }

  getConsultations(): Observable<IClientConsultation[]> {
    return this.get(`${this.controller}/consultations?expand=client,schedule`);
  }

  getClientsConsultations(params?: {
    format: CONSULTATION_FORMAT,
    page?: number,
    limit?: number,
    status?: 0 | 1
  }): Observable<IClientConsultation[]> {
    return this.get(`${this.controller}/clients?expand=client,schedule`, { params });
  }
}