import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IPsychologist } from '@psycho/core';

@Component({
  selector: 'psycho-client-new-session-dialog',
  templateUrl: './client-new-session-dialog.component.html',
  styleUrls: ['./client-new-session-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientNewSessionDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly psychologist: IPsychologist,
    private readonly dialogRef: MatDialogRef<ClientNewSessionDialogComponent>,
    private readonly router: Router
  ) { }

  ngOnInit(): void {

  }

  onClose(sign = false): void {
    this.dialogRef.close(sign);
  }

  selectNewPsychologist(event: Event): void {
    event.preventDefault();
    this.router.navigateByUrl('/profile/client/new-session');
    this.onClose();
  }

}
