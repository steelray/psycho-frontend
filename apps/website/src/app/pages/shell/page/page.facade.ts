import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPage, PageApiService } from '@psycho/core';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable()
export class PageFacade {

  constructor(
    private readonly api: PageApiService,
    private readonly activatedRoute: ActivatedRoute
  ) { }


  get page$(): Observable<IPage> {
    return this.activatedRoute.params.pipe(
      map(params => params?.slug),
      filter(slug => !!slug),
      switchMap(slug => this.api.fetchOne(slug))
    );
  }


}