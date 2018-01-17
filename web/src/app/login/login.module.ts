import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from "../services/LoginService";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}

