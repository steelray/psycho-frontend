import { Injectable } from '@angular/core';
import { IPost, IPsychologist, ISubject, PostApiService, PsychologistApiService, SubjectApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class HomeFacade {
  private _subjects$!: Observable<ISubject[]>;
  private _psychologists$!: Observable<IPsychologist[]>;
  private _faq$!: Observable<IPost[] | null>;

  constructor(
    private subjectApiService: SubjectApiService,
    private psychologistApiService: PsychologistApiService,
    private postApiService: PostApiService
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
      this._psychologists$ = this.psychologistApiService.fetchAll({ limit: 3, top: 1 }).pipe(
        shareReplay()
      );
    }
    return this._psychologists$;
  }

  get faq$(): Observable<IPost[] | null> {
    if (!this._faq$) {
      this._faq$ = this.postApiService.fetchAll({ category_slug: 'faq', expand: 'content' }).pipe(
        map(res => res.body)
      );
    }
    return this._faq$;
  }

}
