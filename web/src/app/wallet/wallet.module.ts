import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WalletComponent } from './wallet.component';
import { RouterModule } from '@angular/router';
import { WalletResolve } from './wallet.resolve';

@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [
    WalletResolve
  ]
})
export class WalletModule {
}
