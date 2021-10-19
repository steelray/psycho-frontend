import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientApiService } from '@psycho/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'psycho-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent {
  constructor(
    private readonly clientApiService: ClientApiService
  ) { }

  get registrationCompleted$(): Observable<boolean> {
    return this.clientApiService.getClientData().pipe(
      map(data => !!data?.user?.first_name)
    )
  }

}
