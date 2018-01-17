import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { ContactRoutes } from './contact/contact.routes';
import { WalletRoutes } from './wallet/wallet.routes';
import { ErrorRoutes } from './error/error.routes';
import { DelegatesRoutes } from './delegates/delegates.routes';
import { LoginRoutes } from "./login/login.routes";

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      ...LoginRoutes,
      ...HomeRoutes,
      ...WalletRoutes,
      ...ContactRoutes,
      ...DelegatesRoutes,
// ERROR ON END
      ...ErrorRoutes,
    ],
  },
];

export const routes: Routes = [
  ...AppRoutes
];
