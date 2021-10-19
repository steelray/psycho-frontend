import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const MAT_SNACKBAR_CONFIG: MatSnackBarConfig = {
  horizontalPosition: 'center',
  verticalPosition: 'top',
};

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snack: MatSnackBar) { }

  error(title: string): void {
    this.snack.open(title, 'Закрыть', {
      ...MAT_SNACKBAR_CONFIG,
      panelClass: 'error',
      duration: 6000,
    });
  }

  success(title: string): void {
    this.snack.open(title, 'Закрыть', {
      ...MAT_SNACKBAR_CONFIG,
      panelClass: 'success',
      duration: 3000,
    });
  }

  warning(title: string): void {
    this.snack.open(title, 'Закрыть', {
      ...MAT_SNACKBAR_CONFIG,
      panelClass: 'warning',
      duration: 5000,
    });
  }

  info(title: string): void {
    this.snack.open(title, 'Закрыть', {
      ...MAT_SNACKBAR_CONFIG,
      panelClass: 'info',
      duration: 4000,
    });
  }
}
