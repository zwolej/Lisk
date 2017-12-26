import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { LiskService } from "./services/LiskService";
import {NavigationEnd, Router} from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  walletAddress: string;
  delegates: any;

  constructor(private liskService: LiskService, private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.loadScript();
      }
    });
  }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
    this.liskService.getActiveDelegates((response: any) => {
      this.delegates = response;
    });
  }

  searchForWallet(event: any) {
    event.preventDefault();

    if (this.walletAddress) {
      this.router.navigate(['wallet/' + this.walletAddress]);
    }
  }

  public loadScript() {
    const old = document.getElementById("AppJqueryScript")
    if (old) {
      old.remove()
    }
    const appScript = document.createElement("script");
    appScript.setAttribute("id", "AppJqueryScript");
    appScript.setAttribute("src", 'assets/wrap-bootstrap/js/app.min.js');
    appScript.setAttribute("type", 'text/javascript');
    document.body.appendChild(appScript);
  }
}
