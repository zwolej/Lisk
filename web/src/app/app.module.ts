import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './public/home/home.module';
import { routes } from './app.routes';
import { ContactModule } from './public/contact/contact.module';
import { LiskService } from './services/LiskService';
import { WalletModule } from './public/wallet/wallet.module';
import { FormsModule } from '@angular/forms';
import { ErrorService } from './services/ErrorService';
import { ErrorModule } from './public/error/error.module';
import { NavigationComponent } from './public/template/navigation.component';
import { DelegatesModule } from './public/delegates/delegates.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { HttpService } from './services/HttpService';
import { LoginModule } from './public/login/login.module';
import { AuthGuard } from './app.auth.guard';
import { AuthService } from './services/AuthService';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.interceptor';
import { YourWalletModule } from "./private/wallet/your.wallet.module";

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent
  ],
  imports: [
    LoginModule,
    HomeModule,
    WalletModule,
    YourWalletModule,
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
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi: true
      }
    ],
    LiskService,
    HttpService,
    ErrorService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
