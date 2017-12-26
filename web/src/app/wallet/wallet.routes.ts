import { WalletComponent } from './wallet.component';
import { Routes } from '@angular/router';
import {WalletResolve} from "./wallet.resolve";

export const WalletRoutes: Routes = [
  {
    path: 'wallet/:address',
    component: WalletComponent,
    resolve: {
      dupa: WalletResolve
    },
  }
];
