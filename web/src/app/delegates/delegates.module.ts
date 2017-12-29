import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { DelegatesComponent } from "./delegates.component";

@NgModule({
  declarations: [
    DelegatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ]
})
export class DelegatesModule { }
