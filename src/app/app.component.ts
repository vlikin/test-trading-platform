import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { AuthenticationService } from './service/authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(public authentication: AuthenticationService) {}

  openSidenav() {
    this.sidenav.toggle();
  }

  navigate(uri) {
    //this.router.navigate([uri]);
    this.sidenav.close();
  }

  logout() {
    this.authentication.logout();
    //this.router.navigate(['/login']);
    this.sidenav.close();
  }
}
