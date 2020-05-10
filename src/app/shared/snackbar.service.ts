import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  durationInSeconds = 5;

  constructor(private snackBar: MatSnackBar) {
  }

  open(message) {
    this.snackBar.open(message, 'Undo', {
      duration: this.durationInSeconds * 1000
    });
  }
}
