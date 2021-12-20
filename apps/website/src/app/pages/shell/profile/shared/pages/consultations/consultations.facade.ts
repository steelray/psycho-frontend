import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService, ConsultationApiService, CONSULTATION_FORMAT, CONSULTATION_FORM_ROUTE, CONSULTATION_STATUS, CONSULTATION_USER_ROLE, IClientConsultation, IUser } from '@psycho/core';
import { ChatService } from '@psycho/features';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ClientInfoDialogComponent } from '../../../shared/components/client-info-dialog/client-info-dialog.component';
import { TakeToWorkConfirmDialogComponent } from './components/take-to-work-confirm-dialog/take-to-work-confirm-dialog.component';

@Injectable()
export class ConsultationsFacade extends WithDestroy() {
  private readonly _realoadConsultations$ = new BehaviorSubject<null>(null);
  private readonly _selectedConsultation$ = new BehaviorSubject<IClientConsultation | null>(null);

  constructor(
    private readonly api: ConsultationApiService,
    private readonly authService: AuthService,
    private readonly chatService: ChatService,
    private readonly dialog: MatDialog,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    super();
    this.resetSelectedConsultationOnNavigationStart();

  }

  get newConsultations$(): Observable<IClientConsultation[]> {
    return combineLatest([
      this.formatRoute$,
      this._realoadConsultations$
    ]).pipe(
      map(([format]) => {
        return format === CONSULTATION_FORM_ROUTE.FORMAT_EXPRESS ? CONSULTATION_FORMAT.FORMAT_EXPRESS : CONSULTATION_FORMAT.FORMAT_FULL_CHAT;
      }),
      switchMap(format => this.api.getConsultations({
        status: [CONSULTATION_STATUS.STARTED, CONSULTATION_STATUS.WAITING],
        format,
        role: this.userRole,
        expand: this.getExpandParams(this.userRole)
      }))
    );
  }

  get pastConsultations$(): Observable<IClientConsultation[]> {
    return combineLatest([
      this.formatRoute$,
      this._realoadConsultations$
    ]).pipe(
      map(([format]) => {
        return format === CONSULTATION_FORM_ROUTE.FORMAT_EXPRESS ? CONSULTATION_FORMAT.FORMAT_EXPRESS : CONSULTATION_FORMAT.FORMAT_FULL_CHAT;
      }),
      switchMap((format) => this.api.getConsultations({
        status: CONSULTATION_STATUS.COMPLETED,
        format,
        role: this.userRole,
        expand: this.getExpandParams(this.userRole)
      }))
    );
  }

  get formatRoute$(): Observable<CONSULTATION_FORM_ROUTE> {
    return this.activatedRoute.params.pipe(
      map(params => params.format)
    );
  }


  get userRole(): CONSULTATION_USER_ROLE {
    const data = this.authService.userData;
    return data?.is_client ? CONSULTATION_USER_ROLE.ROLE_CLIENT : CONSULTATION_USER_ROLE.ROLE_PSYCHOLOGIST;
  }

  get selectedConsultation$(): Observable<IClientConsultation | null> {
    return this._selectedConsultation$.asObservable();
  }

  get receiver$(): Observable<IUser | undefined> {
    return this.selectedConsultation$.pipe(
      map(consultation => consultation?.client || consultation?.psychologist)
    )
  }

  onConsultationSelect(consultation: IClientConsultation): void {
    this._selectedConsultation$.next(consultation);
  }

  showClientInfo(consultation: IClientConsultation | undefined): void {
    if (consultation) {
      this.dialog.open(
        ClientInfoDialogComponent,
        {
          data: consultation
        }
      )
    }
  }

  startConsultation(): void {
    this.api.startConsultation(this._selectedConsultation$.getValue()?.id as number).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.changeConsultationStatus(CONSULTATION_STATUS.STARTED);
      this._realoadConsultations$.next(null);
    });
  }

  endConsultation(): void {
    this.api.endConsultation(this._selectedConsultation$.getValue()?.id as number).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.changeConsultationStatus(CONSULTATION_STATUS.COMPLETED);
      this._realoadConsultations$.next(null);
    });
  }

  getExpandParams(userRole: CONSULTATION_USER_ROLE): string {
    const userType = userRole === CONSULTATION_USER_ROLE.ROLE_CLIENT ? CONSULTATION_USER_ROLE.ROLE_PSYCHOLOGIST : CONSULTATION_USER_ROLE.ROLE_CLIENT;
    let res = `${userType},schedule,subject`;
    if (userRole === CONSULTATION_USER_ROLE.ROLE_PSYCHOLOGIST) {
      res = res + ',is_taken';
    }
    return res;
  }

  takeToWork(consultation: IClientConsultation): void {
    this.dialog.open(
      TakeToWorkConfirmDialogComponent,
      {
        width: '320px',
        data: consultation
      }
    ).afterClosed().pipe(
      filter(res => !!res),
      switchMap(() => this.api.takeToWork(consultation.id)),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this._realoadConsultations$.next(null);
    })
  }

  private resetSelectedConsultationOnNavigationStart(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this._selectedConsultation$.next(null);
    })
  }

  private changeConsultationStatus(status: CONSULTATION_STATUS): void {
    const consultation = this._selectedConsultation$.getValue();
    if (consultation) {
      consultation.status = status;
      this._selectedConsultation$.next(consultation);
    }

  }

}