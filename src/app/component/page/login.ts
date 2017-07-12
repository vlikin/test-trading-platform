import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material'

import { AuthenticationService } from '../../service/authentication';

@Component({
  selector: 'app-login-page-component',
  template: `
    <form [formGroup]="form">
      <md-list>
        <md-list-item>
          <md-input-container>
            <input formControlName="email" mdInput placeholder="Email">
          </md-input-container>
        </md-list-item>
        <md-list-item>
          <md-input-container>
            <input formControlName="password" mdInput type="password" placeholder="Password">
          </md-input-container>
        </md-list-item>
        <md-list-item>
          <button md-raised-button (click)="submit()" [disabled]="isProcessing" class="submit">Login</button>
        </md-list-item>
      </md-list>
      <md-card>
        <ul>
          <li>Email: <b>viktor.likin@gmail.com</b></li>
          <li>Password: <b>password</b></li>
        </ul>
      </md-card>
    </form>
  `,
  styles: []
})
export class LoginPageComponent {
  private form = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  public isProcessing = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private msgService: MdSnackBar) {
  }

  ngOnInit() {
  }

  private submit() {
    this.isProcessing = true;
    let answer: boolean = this.authenticationService.login(this.form.value.email, this.form.value.password);
    this.isProcessing = false;
    if (answer) {
      console.log('redirect');
      this.router.navigate(['/charts']);
    }
    else {
      this.msgService.open('Wrong authentication data.');
    }
  }
}
