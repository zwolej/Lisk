import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YourWalletComponent } from "./your.wallet.component";

@NgModule({
  declarations: [
    YourWalletComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: []
})
export class YourWalletModule {
}
