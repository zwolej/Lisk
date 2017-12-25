import { WalletComponent } from './wallet.component';
import { Routes } from '@angular/router';

export const WalletRoutes: Routes = [
  {
    path: 'wallet/:address',
    component: WalletComponent
  }
];
