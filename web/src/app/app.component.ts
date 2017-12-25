import {Component, OnInit} from '@angular/core';
import { LiskService } from "./services/LiskService";
import {Router} from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class  AppComponent implements OnInit {

  walletAddress: string;
  title = 'app';
  delegates: any;

  constructor(private liskService: LiskService, private router: Router) {
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

}
