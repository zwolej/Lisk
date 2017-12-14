import {Component, OnInit} from '@angular/core';
import { LiskService } from "./services/LiskService";

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class  AppComponent implements OnInit {

  title = 'app';
  delegates: any;

  constructor(private liskService: LiskService) {
  }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
    this.liskService.getActiveDelegates((response: any) => {
      this.delegates = response;
    });
  }

}
