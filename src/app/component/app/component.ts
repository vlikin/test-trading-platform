import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router} from '@angular/router'

import { AuthenticationService } from '../../service/authentication';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(
    public authentication: AuthenticationService,
    public router: Router
  ) {}

  openSidenav() {
    this.sidenav.toggle();
  }

  navigate(uri) {
    this.router.navigate([uri]);
    this.sidenav.close();
  }

  logout() {
    this.authentication.logout();
    this.router.navigate(['/login']);
    this.sidenav.close();
  }
}
