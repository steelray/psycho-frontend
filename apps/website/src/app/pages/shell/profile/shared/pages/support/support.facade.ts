import { Injectable } from '@angular/core';
import { ISupport, SupportApiService } from '@psycho/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class SupportFacade {
  private readonly _reloadMessages$ = new BehaviorSubject<null>(null);
  constructor(
    private readonly supportApiService: SupportApiService
  ) { }

  get messages$(): Observable<ISupport[]> {
    return this._reloadMessages$.pipe(
      switchMap(() => this.supportApiService.fetchAll())
    );
  }

  sendMessage(message: string): void {
    this.supportApiService.sendMessage(message).subscribe(() => this._reloadMessages$.next(null));
  }

}