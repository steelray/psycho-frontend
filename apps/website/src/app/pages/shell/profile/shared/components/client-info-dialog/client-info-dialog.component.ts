import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IClientConsultation, IUser } from '@psycho/core';

@Component({
  selector: 'psycho-client-info-dialog',
  templateUrl: './client-info-dialog.component.html',
  styleUrls: ['./client-info-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientInfoDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly consultation: IClientConsultation
  ) { }

  ngOnInit(): void {

  }

  get user(): IUser | undefined {
    return this.consultation?.client || this.consultation?.psychologist;
  }

}
