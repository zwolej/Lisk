import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WalletComponent} from './wallet.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ]
})
export class WalletModule { }
