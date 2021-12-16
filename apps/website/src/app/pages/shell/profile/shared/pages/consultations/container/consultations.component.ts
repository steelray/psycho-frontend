import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CONSULTATION_FORM_ROUTE, CONSULTATION_USER_ROLE, IClientConsultation, IUser } from '@psycho/core';
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
  selectedConsultation!: IClientConsultation;
  newConsultations$ = this.facade.newConsultations$;
  pastConsultations$ = this.facade.pastConsultations$;
  userRole = this.facade.userRole;
  constructor(
    private readonly facade: ConsultationsFacade
  ) { }

  onSelect(consultation: IClientConsultation): void {
    this.selectedConsultation = consultation;
    this.facade.onConsultationSelect(consultation);
  }

  onShowInfo(e: Event, consultation: IClientConsultation): void {
    e.stopPropagation();
    e.preventDefault();
    this.facade.showClientInfo(consultation);
  }

  onConsultationEnd(): void {
    this.facade.endConsultation(this.selectedConsultation?.id as number);
    this.selectedConsultation.status = 1;
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

  get receiver(): IUser | null | undefined {
    return this.selectedConsultation?.client || this.selectedConsultation?.psychologist;
  }

}
