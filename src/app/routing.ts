import { Routes } from '@angular/router';
import { AuthenticationGuard } from './guard/authentication';

import { HomePageComponent } from './component/page/home';
import { LoginPageComponent } from './component/page/login';
import { NotFoundPageComponent } from './component/page/not-found';
import { ChartsPageComponent } from './component/page/charts';


export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'charts',
    component: ChartsPageComponent,
    canActivate: [
      AuthenticationGuard
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
