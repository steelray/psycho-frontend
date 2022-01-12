import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { AuthService, ConsultationApiService, CONSULTATION_FORMAT, CONSULTATION_FORM_ROUTE, CONSULTATION_STATUS, CONSULTATION_USER_ROLE, IClientConsultation, IUser, WSService, WS_COMMANDS, WS_RESPONSE_TYPE } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';
import * as moment from 'moment';
import { BehaviorSubject, combineLatest, interval, Observable, Subject } from 'rxjs';
import { filter, map, switchMap, take, takeUntil, takeWhile } from 'rxjs/operators';
import { ClientInfoDialogComponent } from '../../../shared/components/client-info-dialog/client-info-dialog.component';
import { TakeToWorkConfirmDialogComponent } from './components/take-to-work-confirm-dialog/take-to-work-confirm-dialog.component';

@Injectable()
export class ConsultationsFacade extends WithDestroy() {
  private readonly _realoadConsultations$ = new BehaviorSubject<null>(null);
  private readonly _selectedConsultation$ = new BehaviorSubject<IClientConsultation | null>(null);
  readonly intervieweesOnline$ = new BehaviorSubject<number[]>([]);
  private readonly _startTimer$ = new Subject();
  private readonly _endTimer$ = new Subject();
  constructor(
    private readonly api: ConsultationApiService,
    private readonly authService: AuthService,
    private readonly dialog: MatDialog,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly ws: WSService
  ) {
    super();
    this.resetSelectedConsultationOnNavigationStart();

    this.ws.onMessage$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(message => {
      message = JSON.parse(message);

      const current = this.intervieweesOnline$.getValue();

      switch (message.type) {
        case WS_RESPONSE_TYPE.ONLINE_INTERVIEWEES:
          this.intervieweesOnline$.next(message.message?.map((i: any) => +i));
          break;
        case WS_RESPONSE_TYPE.CLOSED:
          this.intervieweesOnline$.next(current.filter(i => i !== +message.message));
          break;
        case WS_RESPONSE_TYPE.REGISTERED:
          current.push(+message.message);
          this.intervieweesOnline$.next(current);
          break;
        case WS_RESPONSE_TYPE.CHAT_STARTED:
          this._startTimer$.next();
          this.changeConsultationStatus(CONSULTATION_STATUS.STARTED);
          break;
        case WS_RESPONSE_TYPE.CHAT_ENDED:
          this._realoadConsultations$.next(null);
          this._endTimer$.next(true);
          this._endTimer$.complete();
          this.changeConsultationStatus(CONSULTATION_STATUS.COMPLETED);
          break;
      }
    })

  }

  get timer$(): Observable<string> {
    return this._startTimer$.pipe(
      switchMap(() => this.selectedConsultation$),
      filter(res => !!res),
      switchMap((res) => interval(1000).pipe(
        map(() => res)
      )),
      map((selectedConsultation) => {
        const start = moment(selectedConsultation?.schedule?.datetime);
        const end = moment(start).add(50, 'minutes');
        return end.subtract(1, 'second')
      }),
      map(res => res.format('YYYY.mm.dd HH:mm:ss')),
      takeUntil(this._endTimer$)
    )
  }

  get newConsultations$(): Observable<IClientConsultation[]> {
    return this.getConsultations([CONSULTATION_STATUS.STARTED, CONSULTATION_STATUS.WAITING]);
  }

  get pastConsultations$(): Observable<IClientConsultation[]> {
    return this.getConsultations(CONSULTATION_STATUS.COMPLETED);
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
    if (consultation?.status === CONSULTATION_STATUS.STARTED) {
      this._startTimer$.next();
    }
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
    this.ws.sendMessage({
      user: this.authService.userData?.id as number,
      consultation: this._selectedConsultation$.getValue()?.id,
      command: WS_COMMANDS.START_CHAT
    });
  }

  endConsultation(): void {
    this.ws.sendMessage({
      user: this.authService.userData?.id as number,
      consultation: this._selectedConsultation$.getValue()?.id,
      command: WS_COMMANDS.END_CHAT
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

  private getConsultations(status: CONSULTATION_STATUS | CONSULTATION_STATUS[]): Observable<IClientConsultation[]> {
    return combineLatest([
      this.formatRoute$,
      this.intervieweesOnline$,
      this._realoadConsultations$
    ]).pipe(
      map(([routeFormat, onlines]) => {
        const format = routeFormat === CONSULTATION_FORM_ROUTE.FORMAT_EXPRESS ? CONSULTATION_FORMAT.FORMAT_EXPRESS : CONSULTATION_FORMAT.FORMAT_FULL_CHAT;
        return { format, onlines };
      }),
      switchMap((res) => this.api.getConsultations({
        status,
        format: res.format,
        role: this.userRole,
        expand: this.getExpandParams(this.userRole)
      }).pipe(
        map(consultations => consultations.map(consultation => {
          if (consultation?.psychologist) {
            consultation.psychologist.isOnline = res.onlines.includes(consultation.psychologist.id);
          } else if (consultation?.client) {
            consultation.client.isOnline = res.onlines.includes(consultation.client.id);
          }
          return consultation;
        }))
      )
      ));
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