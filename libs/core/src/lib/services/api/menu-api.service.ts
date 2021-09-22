import { Injectable } from '@angular/core';
import { IMenuItem } from '@psycho/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class MenuApiService extends ApiService {

  getMenu(menuId: string): Observable<IMenuItem[]> {
    return this.get<IMenuItem[]>(`menu/${menuId}`).pipe(
      map(items => items.map(item => {
        item.url = item?.url[0];
        console.log(item);

        return item;
      }))
    );
  }


}

