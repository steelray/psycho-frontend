import { Injectable } from '@angular/core';
import { ISubject, SubjectApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class HomeFacade {
  private _subjects$!: Observable<ISubject[]>;
  constructor(
    private subjectApiService: SubjectApiService
  ) { }

  get subjects$(): Observable<ISubject[]> {
    if (!this._subjects$) {
      this._subjects$ = this.subjectApiService.getSubjects().pipe(
        shareReplay()
      );
    }
    return this._subjects$;
  }

}