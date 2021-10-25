import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { HttpErrorService, PsychologistApiService } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { SnackbarService } from '@psycho/web/features';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'psycho-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SnackbarService]
})
export class AppComponent extends WithDestroy() implements OnInit {
  constructor(
    @Self() private readonly snackbar: SnackbarService,
    private readonly errorService: HttpErrorService,
    private readonly psychologistApiService: PsychologistApiService
  ) {
    super();
    errorService.error$.pipe(
      filter(res => !!res),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      if (res) {
        this.snackbar.error(res);
      }
    });
  }

  ngOnInit(): void {
    this.psychologistApiService.getMonthSchedule(2021, 10, 7).subscribe(res => {
      console.log(res);
    });
  }

}
