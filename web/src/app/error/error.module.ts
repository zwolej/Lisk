import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {InternalErrorComponent} from "./500/500.error.component";

@NgModule({
  declarations: [
    InternalErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ]
})
export class ErrorModule { }
