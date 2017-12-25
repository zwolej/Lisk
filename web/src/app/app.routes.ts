import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import {ContactRoutes} from "./contact/contact.routes";
import {WalletRoutes} from "./wallet/wallet.routes";
import {ErrorRoutes} from "./error/error.routes";

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      ...HomeRoutes,
      ...WalletRoutes,
      ...ContactRoutes,
// ERROR ON END
      ...ErrorRoutes,
    ],
  },
];

export const routes: Routes = [
  ...AppRoutes
];
