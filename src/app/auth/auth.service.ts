import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean;

  constructor() {
    this.loggedIn = false;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public logIn(): void {
    this.loggedIn = true;
  }

  public logOut(): void {
    this.loggedIn = false;
  }
}
