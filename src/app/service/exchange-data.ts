import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {
  private token: string | boolean = 'test token';

  constructor() {
    let userStr = localStorage.getItem('currentUser');
    if (!!userStr) {
      let currentUser = JSON.parse(userStr);
      this.token = currentUser && currentUser.token;
    }
    else {
      this.token = false;
    }
  }

  public login(email: string, password: string) {
    if (email == 'viktor.likin@gmail.com' && password == 'password') {
      localStorage.setItem('currentUser', JSON.stringify({token: 'test token'}));

      return true;
    }
    else {
      return false;
    }
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public logout(): void {
    this.token = false;
    localStorage.removeItem('currentUser');
  }
}
