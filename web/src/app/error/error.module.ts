import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {InternalErrorComponent} from "./500/500.error.component";
import {NotFoundComponent} from "./404/404.error.component";

@NgModule({
  declarations: [
    InternalErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ]
})
export class ErrorModule { }
