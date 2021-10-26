import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { IClient } from '../../interfaces/client.interface';
import { IUser } from '@psycho/core';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService extends ApiService {
  private readonly controller = 'clients';
  private _clientData$!: Observable<IUser> | null; // client data cache
  private readonly _updateClientData$ = new BehaviorSubject<null>(null);

  getClientData(): Observable<IUser> {
    return this._updateClientData$.pipe(
      switchMap(() => {
        if (!this._clientData$) {
          // this._clientData$ = of({
          //   id: 1,
          //   user: {
          //     id: 1
          //   }
          // })
          this._clientData$ = this.get<IUser>(this.controller).pipe(
            shareReplay()
          );
        }
        return this._clientData$;
      })
    );
  }

  // update chached data
  updateClientData(): void {
    this._clientData$ = null;
    this._updateClientData$.next(null);
  }

  completeRegistration(data: any): Observable<boolean> {
    return this.post(`${this.controller}/complete-registration`, data);
  }

}