import { Routes } from '@angular/router';
import { HomeRoutes } from './public/home/home.routes';
import { ContactRoutes } from './public/contact/contact.routes';
import { WalletRoutes } from './public/wallet/wallet.routes';
import { ErrorRoutes } from './public/error/error.routes';
import { DelegatesRoutes } from './public/delegates/delegates.routes';
import { LoginRoutes } from './public/login/login.routes';
import { AuthGuard } from './app.auth.guard';
import { YourWalletRoutes } from './private/wallet/your.wallet.routes';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { // public
    path: '',
    children: [
      ...LoginRoutes,
      ...HomeRoutes,
      ...WalletRoutes,
      ...DelegatesRoutes,
      ...ContactRoutes,
    ]
  },
  { // private
    path: '',
    canActivate: [AuthGuard],
    children: [
      ...YourWalletRoutes
    ]
  },
  ...ErrorRoutes,
];
// ERROR ON END

export const routes: Routes = [
  ...AppRoutes
];
