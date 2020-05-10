export interface UserModel {
  getLogin(): string;
  getPassword(): string;
}

export class User implements UserModel {
  private login = 'admin';
  private password = 'Tambov6966';

  public getLogin() {
    return this.login;
  }

  public getPassword() {
    return this.password;
  }
}
