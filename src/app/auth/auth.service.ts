import {Injectable} from '@angular/core';
import {User} from './user.model';
import {SnackbarService} from '../shared/snackbar.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthData} from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean;
  private user: User;

  constructor(private snackBar: SnackbarService, private router: Router, private afAuth: AngularFireAuth) {
    this.loggedIn = false;
    this.user = new User();
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.loggedIn = true;
        this.router.navigate(['']);
      } else {
        this.loggedIn = false;
        this.router.navigate(['/login']);
      }
    });
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public logIn(authData: AuthData): void {
    this.afAuth.signInWithEmailAndPassword(authData.email, authData.password).then(() => {
      // nothing to do
    }).catch(error => {
      this.snackBar.open(error.message);
    });
  }

  public logOut(): void {
    this.afAuth.signOut();
  }
}
