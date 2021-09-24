import { Injectable } from '@angular/core';
import { IPsychologist, ISubject, PsychologistApiService, SubjectApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class HomeFacade {
  private _subjects$!: Observable<ISubject[]>;
  private _psychologists$!: Observable<IPsychologist[]>;

  constructor(
    private subjectApiService: SubjectApiService,
    private psychologistApiService: PsychologistApiService
  ) { }

  get subjects$(): Observable<ISubject[]> {
    if (!this._subjects$) {
      this._subjects$ = this.subjectApiService.getSubjects().pipe(
        shareReplay()
      );
    }
    return this._subjects$;
  }

  get psychologists$(): Observable<IPsychologist[]> {
    if (!this._psychologists$) {
      this._psychologists$ = this.psychologistApiService.fetchAll({ limit: 3 }).pipe(
        shareReplay()
      );
    }
    return this._psychologists$;
  }

}
