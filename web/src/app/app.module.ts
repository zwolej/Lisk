import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {RouteReuseStrategy, RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { ContactModule } from './contact/contact.module';
import { LiskService } from "./services/LiskService";
import {WalletModule} from "./wallet/wallet.module";
import { FormsModule } from '@angular/forms';
import {ErrorService} from "./services/ErrorService";
import {ErrorModule} from "./error/error.module";
import {NavigationComponent} from "./template/navigation.component";
import {CustomReuseStrategy} from "./app.reuse.strategy";

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent
  ],
  imports: [
    HomeModule,
    WalletModule,
    ContactModule,
    ErrorModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LiskService,
    ErrorService,
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
