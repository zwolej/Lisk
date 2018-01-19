import { Routes } from '@angular/router';
import { YourWalletComponent } from "./your.wallet.component";

export const YourWalletRoutes: Routes = [
  {
    path: 'yourwallet/:address',
    component: YourWalletComponent,
  }
];
