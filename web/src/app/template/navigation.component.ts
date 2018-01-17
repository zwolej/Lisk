import { Component } from '@angular/core';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {

  constructor(private authService: AuthService) {
  }

  isLogged(): boolean {
    return this.authService.isLogged();
  }

}
