import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {ContactModule} from "./contact/contact.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeModule,
    ContactModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
