import { Component } from '@angular/core';
import { LoginService } from "../services/LoginService";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private loginService: LoginService) {
  }

  username: string;
  password: string;

  login() {
    console.log("Try to login");

    if (this.username && this.password) {
      this.loginService.login(this.username, this.password)
        .subscribe((event) => {
          console.log("repsonse from login", event);
        });
    } else {
      console.log("Invalid form login data");
    }
  }

}
