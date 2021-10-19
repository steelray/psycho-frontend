import { ChangeDetectionStrategy, Component, Self } from '@angular/core';
import { HttpErrorService } from '@psycho/core';
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
export class AppComponent extends WithDestroy() {
  constructor(
    @Self() private readonly snackbar: SnackbarService,
    private readonly errorService: HttpErrorService
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

}
