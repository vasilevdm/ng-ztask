import {Injectable} from '@angular/core';
import {User} from './user.model';
import {SnackbarService} from '../shared/snackbar.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean;
  private user: User;

  constructor(private snackBar: SnackbarService, private router: Router) {
    this.loggedIn = false;
    this.user = new User();
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public logIn(login, password): void {
    if (login === this.user.getLogin() && password === this.user.getPassword()) {
      this.loggedIn = true;
      this.router.navigate(['']);
    } else {
      this.snackBar.open('Login or/and password is incorrect');
    }
  }

  public logOut(): void {
    this.loggedIn = false;
  }
}
