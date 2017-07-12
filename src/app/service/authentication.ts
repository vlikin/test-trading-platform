import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {
  private token: string | boolean = false;

  constructor() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  public login(email: string, password: string) {
      localStorage.setItem('currentUser', JSON.stringify({
        token: this.token
      }));
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public logout(): void {
    this.token = false;
    localStorage.removeItem('currentUser');
  }
}
