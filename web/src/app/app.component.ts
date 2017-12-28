import {Component, OnInit } from '@angular/core';
import { LiskService } from "./services/LiskService";
import {NavigationEnd, Router, ActivationStart, ActivationEnd} from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  walletAddress: string;

  constructor(private liskService: LiskService, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof ActivationStart) {
        // $(".page-loader").fadeIn(); //LOADING BAR ON
      } else if(event instanceof ActivationEnd) {
        // $(".page-loader").fadeOut(); //LOADING BAR OFF
      } else if(event instanceof NavigationEnd) {
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

  searchForWallet(event: any) {
    event.preventDefault();

    if (this.walletAddress) {
      this.router.navigate(['wallet/' + this.walletAddress]);
    }
  }

  private loadScript() {
    const old = document.getElementById("AppJqueryScript");
    if (old) {
      old.remove()
    }
    const appScript = document.createElement("script");
    appScript.setAttribute("id", "AppJqueryScript");
    appScript.setAttribute("src", 'assets/wrap-bootstrap/js/app.min.js');
    appScript.setAttribute("type", 'text/javascript');
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
