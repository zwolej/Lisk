import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { DelegatesComponent } from "./delegates.component";
import {DelegatesResolve} from "./delegates.resolve";

@NgModule({
  declarations: [
    DelegatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [
    DelegatesResolve
  ]
})
export class DelegatesModule { }
