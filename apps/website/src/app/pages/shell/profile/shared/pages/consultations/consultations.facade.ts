import { DOCUMENT } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { AuthService, ChatApiService, ConsultationApiService, CONSULTATION_FORMAT, CONSULTATION_FORM_ROUTE, CONSULTATION_STATUS, CONSULTATION_USER_ROLE, IClientConsultation, IUser, WSService, WS_COMMANDS, WS_RESPONSE_TYPE } from '@psycho/core';
import { ChatService } from '@psycho/features';
import { WithDestroy } from '@psycho/utils';
import { SocketService } from 'apps/website/src/app/ui/widgets/chat/shared/services/socket.service';
import * as moment from 'moment';
import { BehaviorSubject, combineLatest, interval, Observable, of, Subject } from 'rxjs';
import { filter, map, switchMap, take, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { ClientInfoDialogComponent } from '../../../shared/components/client-info-dialog/client-info-dialog.component';
import { ReviewDialogComponent } from './components/review-dialog/review-dialog.component';
import { TakeToWorkConfirmDialogComponent } from './components/take-to-work-confirm-dialog/take-to-work-confirm-dialog.component';

@Injectable()
export class ConsultationsFacade extends WithDestroy() {
  private readonly _realoadConsultations$ = new BehaviorSubject<null>(null);
  private readonly _selectedConsultation$ = new BehaviorSubject<IClientConsultation | null>(null);
  readonly intervieweesOnline$ = this.socketService.onlineInterviewees$;
  private readonly _startTimer$ = new Subject();
  private readonly _endTimer$ = new Subject();
  readonly userAuthData$ = this.authService.userData$;
  private readonly _messagesPage$ = new BehaviorSubject<number>(0);
  readonly videoIsSwitching$ = new BehaviorSubject<boolean>(false);
  constructor(
    private readonly api: ConsultationApiService,
    private readonly authService: AuthService,
    private readonly dialog: MatDialog,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly socketService: SocketService,
    private readonly chatApiService: ChatApiService,
    private readonly chatService: ChatService,
    private readonly snackbar: MatSnackBar,
    @Inject(DOCUMENT) private readonly document: Document,

  ) {
    super();
    this.resetSelectedConsultationOnNavigationStart();
    this.observeChatStartStatus();
    this.observeChatEndStatus();


    this.getMessagesHistory();
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

  get selectedConsultationPaymentStatus$(): Observable<string> {
    return this.selectedConsultation$.pipe(
      filter(res => !!res),
      switchMap(consultation => this.api.getConsultationPaymentStatus(consultation?.id as number)),
      map(res => !res ? 'not_found' : res)
    );
  }

  get receiver$(): Observable<IUser | undefined> {
    return this.selectedConsultation$.pipe(
      map(consultation => consultation?.client || consultation?.psychologist),
    )
  }


  onConsultationSelect(consultation: IClientConsultation | null): void {
    if (consultation?.status === CONSULTATION_STATUS.STARTED) {
      this._startTimer$.next();
    }
    this._selectedConsultation$.next(consultation);
  }

  updateMessagesHistory(): void {
    const currentMessagesPage = this._messagesPage$.getValue();
    this._messagesPage$.next(currentMessagesPage + 1);
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

  async startVideoChat(consultation: IClientConsultation): Promise<void> {
    this.videoIsSwitching$.next(true);
    if (this.userRole === CONSULTATION_USER_ROLE.ROLE_CLIENT && consultation?.status === CONSULTATION_STATUS.WAITING) {
      this.snackbar.open('Консультация еще не началась.')
      return;
    }

    of('').pipe(
      switchMap(() => {
        if (consultation?.status === CONSULTATION_STATUS.WAITING) {
          this.startConsultation();
        }
        return of(true);
      }),
      filter(res => !!res),
      switchMap(() => {
        if (this.userRole === CONSULTATION_USER_ROLE.ROLE_CLIENT) {
          return this.chatService.joinMeeting(consultation.id as number);
        }
        return this.chatService.startMeeting(consultation.id as number);
      }),
      takeUntil(this.destroy$)
    ).subscribe((data: any) => {
      this.videoIsSwitching$.next(false);
      this.handleGenrateSignature(data.signature, { meetingNumber: data.id, userEmail: '', userName: data.username, passWord: data.password, apiKey: data.api_key });
    });
  }

  startConsultation(): void {
    this.socketService.startChat(this._selectedConsultation$.getValue()?.id as number);
    this.changeConsultationStatus(CONSULTATION_STATUS.STARTED);
  }

  endConsultation(): void {
    this.socketService.endChat(this._selectedConsultation$.getValue()?.id as number);
    this._realoadConsultations$.next(null);
    this.changeConsultationStatus(CONSULTATION_STATUS.COMPLETED);
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

  private getMessagesHistory(): void {
    combineLatest([
      this.receiver$,
      this._messagesPage$
    ]).pipe(
      map(([receiver, page]) => ({ receiver, page })),
      filter(res => !!res.receiver),
      switchMap(res => this.chatApiService.getMessages({
        receiver_id: res.receiver?.id as number,
        page: res.page,
        limit: 100
      })),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.socketService.updateMessages(res);
    });
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

  private observeChatStartStatus(): void {
    this.socketService.chatStarted$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => this.changeConsultationStatus(CONSULTATION_STATUS.STARTED));
  }


  private observeChatEndStatus(): void {
    this.socketService.chatEnded$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.changeConsultationStatus(CONSULTATION_STATUS.COMPLETED);
      this._realoadConsultations$.next(null);
      if (this.userRole === CONSULTATION_USER_ROLE.ROLE_CLIENT) {
        this.openReviewDialog(this._selectedConsultation$.getValue() as IClientConsultation);
      }
    });
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

  private openReviewDialog(consultation: IClientConsultation): void {
    this.dialog.open(ReviewDialogComponent, {
      data: {
        consultation
      },
      width: '400px'
    }).afterClosed().pipe(
      filter(res => !!res),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.snackbar.open('Спасибо за вашу оценку.', 'Закрыть');
    });
  }

  private handleGenrateSignature(signature: string, formValues: any) {
    let meetingPayloads: any = {
      meetingNumber: formValues.meetingNumber,
      passWord: formValues.passWord,
      signature: signature,
      userEmail: formValues.userEmail,
      userName: formValues.userName,
      apiKey: formValues.apiKey
    };
    this.chatService.initializeWebSDK(meetingPayloads);
    this.document.getElementById('zmmtg-root')!.style.display = 'block'
  }

}