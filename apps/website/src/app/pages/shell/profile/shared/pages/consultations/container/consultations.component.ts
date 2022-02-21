import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CONSULTATION_FORMAT, CONSULTATION_FORM_ROUTE, CONSULTATION_STATUS, CONSULTATION_USER_ROLE, IClientConsultation, IUser } from '@psycho/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConsultationsFacade } from '../consultations.facade';

@Component({
  selector: 'psycho-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConsultationsFacade]
})
export class ConsultationsComponent {
  readonly selectedConsultation$ = this.facade.selectedConsultation$;
  readonly newConsultations$ = this.facade.newConsultations$;
  readonly pastConsultations$ = this.facade.pastConsultations$;
  readonly userRole = this.facade.userRole;
  readonly receiver$ = this.facade.receiver$;
  readonly intervieweesOnline$ = this.facade.intervieweesOnline$;
  readonly userRoles = CONSULTATION_USER_ROLE;
  readonly formats = CONSULTATION_FORMAT;
  readonly userAuthData$ = this.facade.userAuthData$;
  readonly chatExpanded$ = this.selectedConsultation$.pipe(
    map(res => !!res)
  );
  readonly selectedConsultationPaymentStatus$ = this.facade.selectedConsultationPaymentStatus$;
  readonly rolesEnum = CONSULTATION_USER_ROLE;
  readonly statusEnum = CONSULTATION_STATUS;
  readonly videoIsSwitching$ = this.facade.videoIsSwitching$;
  constructor(
    private readonly facade: ConsultationsFacade
  ) {
  }

  onSelect(consultation: IClientConsultation): void {
    this.facade.onConsultationSelect(consultation);
  }

  onShowInfo(e: Event, consultation: IClientConsultation): void {
    e.stopPropagation();
    e.preventDefault();
    this.facade.showClientInfo(consultation);
  }

  onConsultationStart(): void {
    this.facade.startConsultation();
  }

  onConsultationEnd(): void {
    this.facade.endConsultation();
  }

  onTakeToWork(e: Event, consultation: IClientConsultation): void {
    e.stopPropagation();
    e.preventDefault();
    this.facade.takeToWork(consultation);
  }

  onChatHide(): void {
    this.facade.onConsultationSelect(null);
  }

  onGetMessagesHistory(): void {
    this.facade.updateMessagesHistory();
  }

  onVideoSwitch(consultation: IClientConsultation): void {
    this.facade.startVideoChat(consultation);
  }

  get includesVideoChat$(): Observable<boolean> {
    return this.facade.formatRoute$.pipe(
      map(format => format === CONSULTATION_FORM_ROUTE.FORMAT_FULL)
    );
  }

  get showEndChatButton(): boolean {
    return this.userRole === CONSULTATION_USER_ROLE.ROLE_PSYCHOLOGIST;
  }

  get title$(): Observable<string> {
    return this.facade.formatRoute$.pipe(
      map(format => format === CONSULTATION_FORM_ROUTE.FORMAT_FULL
        ? 'Консультации 50 мин'
        : 'Экспресс-консультации')
    )
  }


}
