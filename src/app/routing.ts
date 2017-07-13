import { Routes } from '@angular/router';
import { AuthenticationGuard } from './guard/authentication';

import { HomePageComponent } from './component/page/home';
import { LoginPageComponent } from './component/page/login';
import { NotFoundPageComponent } from './component/page/not-found';
import { ChartsPageComponent } from './component/page/charts';
import { ChartExamplePageComponent } from './component/page/chart-example';
import { CandleSticksExamplePageComponent } from './component/page/candle-sticks-example';


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
    path: 'chart-example',
    component: ChartExamplePageComponent
  },
  {
    path: 'candle-sticks-example',
    component: CandleSticksExamplePageComponent
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
