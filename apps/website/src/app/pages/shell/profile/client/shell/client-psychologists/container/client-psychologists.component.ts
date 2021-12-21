import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPsychologist } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import { SnackbarService } from '@psycho/web/features';
import { filter, takeUntil } from 'rxjs/operators';
import { ClientPsychologistsFacade } from '../client-psychologists.facade';
import { ClientPsycholigistSignDialogComponent } from '../components/client-psycholigist-sign-dialog/client-psycholigist-sign-dialog.component';

const mock: IPsychologist[] = [
  {
    first_name: 'ADSD',
    last_name: 'asdasdasd',
    middle_name: 'adasdasd',
    birthday: 939927600000,
    experience_since: 1539543600000,
    has_degree: true,
    phone: '998909787586',
    email: 'some@email.com',
    avatar: '/assets/img/trusted-spec-1.jpg',
    subjects: [],
    rating: 4.5,
    slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: 2,
  },
  {
    first_name: 'ADSD',
    last_name: 'asdasdasd',
    middle_name: 'adasdasd',
    birthday: 939927600000,
    experience_since: 1539543600000,
    has_degree: true,
    phone: '998909787586',
    email: 'some@email.com',
    avatar: '/assets/img/trusted-spec-1.jpg',
    subjects: [],
    rating: 4.5,
    slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: 2,
  }
];

@Component({
  selector: 'psycho-client-psychologists',
  templateUrl: './client-psychologists.component.html',
  styleUrls: ['./client-psychologists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientPsychologistsFacade]
})
export class ClientPsychologistsComponent extends WithDestroy() {
  readonly psychologists$ = this.facade.myPsychologists$;
  readonly commentForm = this.facade.commentForm;
  selectedPsychologist!: IPsychologist | null;
  infoView = false;
  commenting = false;

  constructor(
    private readonly facade: ClientPsychologistsFacade,
    private readonly dialog: MatDialog,
    private readonly snackbar: SnackbarService,
    private readonly cdRef: ChangeDetectorRef
  ) {
    super();
  }

  showInfo(psychologist: IPsychologist): void {
    this.selectedPsychologist = psychologist;
    this.infoView = true;
    this.commenting = false;
  }

  hideInfo(): void {
    this.selectedPsychologist = null;
    this.infoView = this.commenting = false;
  }

  onSign(psychologist: IPsychologist): void {
    this.dialog.open(ClientPsycholigistSignDialogComponent, {
      panelClass: 'default-dialog',
      data: { psychologist, subject: psychologist.last_consultation_subject }
    }).afterClosed().pipe(
      filter(signed => !!signed),
      takeUntil(this.destroy$)
    ).subscribe(() => this.snackbar.success('Вы записаны'));
  }

  onComment(psychologist: IPsychologist): void {
    this.infoView = false;
    this.selectedPsychologist = psychologist;
    this.commenting = true;
    this.commentForm.get('psychologist_id')?.setValue(psychologist.id);
  }

  commentAndRate(): void {
    if (this.commentForm.invalid) {
      console.error(this.commentForm.errors);
      return;
    }
    this.facade.commentAndRate().pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      if (res) {
        this.cdRef.markForCheck();
        this.commenting = false;
        this.selectedPsychologist = null;
        this.snackbar.success('Ваша оценка сохранена. Спасибо!');
      }
    });
  }

  onRate(rating: number): void {
    this.commentForm.get('rating')?.setValue(rating);
  }

}
