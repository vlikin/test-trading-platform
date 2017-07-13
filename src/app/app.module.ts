import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NvD3Module } from 'angular2-nvd3';
import {
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

import { routes } from './routing';

// Components.
import { AppComponent } from './component/app/component';

// Pages.
import { HomePageComponent } from './component/page/home';
import { LoginPageComponent } from './component/page/login';
import { NotFoundPageComponent } from './component/page/not-found';
import { ChartsPageComponent } from './component/page/charts';
import { ChartExamplePageComponent } from './component/page/chart-example';
import { CandleSticksExamplePageComponent } from './component/page/candle-sticks-example';

// Services.
import { AuthenticationService } from './service/authentication';

// Guards.
import { AuthenticationGuard } from './guard/authentication';

@NgModule({
  declarations: [
    AppComponent,

    // Pages.
    NotFoundPageComponent,
    LoginPageComponent,
    HomePageComponent,
    ChartsPageComponent,
    ChartExamplePageComponent,
    CandleSticksExamplePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NvD3Module,

    // MD Components.
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdToolbarModule,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
