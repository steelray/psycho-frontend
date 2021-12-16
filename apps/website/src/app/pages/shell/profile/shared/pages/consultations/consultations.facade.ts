import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService, ConsultationApiService, CONSULTATION_FORMAT, CONSULTATION_FORM_ROUTE, CONSULTATION_USER_ROLE, IClientConsultation, PsychologistApiService } from '@psycho/core';
import { ChatService } from '@psycho/features';
import { WithDestroy } from '@psycho/utils';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ClientInfoDialogComponent } from '../../../shared/components/client-info-dialog/client-info-dialog.component';

@Injectable()
export class ConsultationsFacade extends WithDestroy() {
  private readonly _realoadConsultations$ = new BehaviorSubject<null>(null);
  constructor(
    private readonly api: ConsultationApiService,
    private readonly authService: AuthService,
    private readonly chatService: ChatService,
    private readonly dialog: MatDialog,
    private readonly activatedRoute: ActivatedRoute
  ) {
    super();
  }

  get newConsultations$(): Observable<IClientConsultation[]> {
    return combineLatest([
      this.formatRoute$,
      this._realoadConsultations$
    ]).pipe(
      map(([format]) => {
        return format === CONSULTATION_FORM_ROUTE.FORMAT_EXPRESS ? 1 : 2;
      }),
      switchMap(format => this.api.getConsultations({
        status: 0,
        format,
        role: this.userRole
      }))
    );
  }

  get pastConsultations$(): Observable<IClientConsultation[]> {
    return combineLatest([
      this.formatRoute$,
      this._realoadConsultations$
    ]).pipe(
      map(([format]) => {
        return format === CONSULTATION_FORM_ROUTE.FORMAT_EXPRESS ? 1 : 2;
      }),
      switchMap(() => this.api.getConsultations({
        status: 1,
        format: CONSULTATION_FORMAT.FORMAT_FULL_CHAT,
        role: this.userRole
      }))
    );
  }

  get formatRoute$(): Observable<CONSULTATION_FORM_ROUTE> {
    return this.activatedRoute.params.pipe(
      map(params => params.format)
    );
  }


  onConsultationSelect(consultation: IClientConsultation): void {
    this.chatService.setSelectedConsultation(consultation)
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

  endConsultation(consultationId: number): void {
    this.api.endConsultation(consultationId).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this._realoadConsultations$.next(null);
    })
  }

  get userRole(): CONSULTATION_USER_ROLE {
    const data = this.authService.userData;
    return data?.is_client ? CONSULTATION_USER_ROLE.ROLE_CLIENT : CONSULTATION_USER_ROLE.ROLE_PSYCHOLOGIST;
  }

}