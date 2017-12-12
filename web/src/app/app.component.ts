import {Component, OnInit} from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class  AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }
}
