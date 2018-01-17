import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { ContactRoutes } from './contact/contact.routes';
import { WalletRoutes } from './wallet/wallet.routes';
import { ErrorRoutes } from './error/error.routes';
import { DelegatesRoutes } from './delegates/delegates.routes';
import { LoginRoutes } from './login/login.routes';
import { AuthGuard } from './app.auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // public
    path: '',
    children: [
      ...LoginRoutes,
      ...HomeRoutes,
      ...WalletRoutes,
      ...DelegatesRoutes,
    ]
  },
  {
    // private
    path: '',
    canActivate: [AuthGuard],
    children: [
      ...ContactRoutes,
    ]
  },
  ...ErrorRoutes,
];
// ERROR ON END

export const routes: Routes = [
  ...AppRoutes
];
