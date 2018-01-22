import { Component } from '@angular/core';
import { LoginService } from '../../services/LoginService';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  shownOption = 'login';
  username: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) {
  }

  login(event: any) {
    event.preventDefault();

    if (this.username && this.password) {
      this.loginService.login(this.username, this.password)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    } else {
      console.log('Invalid form login data');
    }
  }

}
