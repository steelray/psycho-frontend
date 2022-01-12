import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface IContacts {
  [key: string]: string
}

@Injectable({
  providedIn: 'root'
})
export class CommonDataApiService extends ApiService {
  private _contacts$!: Observable<IContacts>;
  private _sidebarAds$!: Observable<string[]>;

  get contacts$(): Observable<IContacts> {
    if (!this._contacts$) {
      this._contacts$ = this.get('contacts');
    }
    return this._contacts$;
  }

  get sidebarAds$(): Observable<string[]> {
    if (!this._sidebarAds$) {
      this._sidebarAds$ = this.get('sidebar-ads');
    }
    return this._sidebarAds$;
  }

}