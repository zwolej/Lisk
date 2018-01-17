import { Component, OnInit } from '@angular/core';
import { ActivationEnd, ActivationStart, NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/AuthService';

declare var particlesJS: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  walletAddress: string;

  constructor(private router: Router, private authService: AuthService) {
    router.events.forEach((event) => {
      if (event instanceof ActivationStart) {
        // $(".page-loader").fadeIn(); //LOADING BAR ON NAVIGATION
      } else if (event instanceof ActivationEnd) {
        setTimeout(() => {
          $('.page-loader').fadeOut();
        }, 500);
      } else if (event instanceof NavigationEnd) {
        const self = this;
        setTimeout(() => {
          self.loadScript();
        }, 100);
      }
    });
  }

  ngOnInit() {
    this.allowToRefreshSameRouteOnNavigation();
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  isLogged() {
    return this.authService.isLogged();
  }

  searchForWallet(event: any) {
    event.preventDefault();

    if (this.walletAddress) {
      this.router.navigate(['wallet/', this.walletAddress]);
    }
  }

  private loadScript() {
    const old = document.getElementById('AppJqueryScript');
    if (old) {
      old.remove();
    }
    const appScript = document.createElement('script');
    appScript.setAttribute('id', 'AppJqueryScript');
    appScript.setAttribute('src', 'assets/wrap-bootstrap/js/app.min.js');
    appScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(appScript);
  }

  private allowToRefreshSameRouteOnNavigation() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scroll(0, 0);
      }
    });
  }
}
