import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WalletComponent} from './wallet.component';
import {RouterModule} from '@angular/router';
import { WalletBasicResolve } from "./wallet.basic.resolve";
import { WalletVoteResolve } from "./wallet.votes.resolve";

@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [
    WalletBasicResolve,
    WalletVoteResolve
  ]
})
export class WalletModule { }
