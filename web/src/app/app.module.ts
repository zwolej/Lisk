import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ContactModule } from './contact/contact.module';
import { LiskService } from './services/LiskService';
import { WalletModule } from './wallet/wallet.module';
import { FormsModule } from '@angular/forms';
import { ErrorService } from './services/ErrorService';
import { ErrorModule } from './error/error.module';
import { NavigationComponent } from './template/navigation.component';
import { DelegatesModule } from './delegates/delegates.module';
import { DelegatesService } from './services/DelegatesService';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent
  ],
  imports: [
    HomeModule,
    WalletModule,
    ContactModule,
    DelegatesModule,
    ErrorModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LiskService,
    DelegatesService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
