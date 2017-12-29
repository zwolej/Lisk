import {Component, OnInit } from '@angular/core';
import { LiskService } from "../services/LiskService";

@Component({
  templateUrl: './delegates.component.html'
})
export class DelegatesComponent implements OnInit {

  delegates: any;

  constructor(private liskService: LiskService) { }

  ngOnInit(): void {
    this.liskService.getDelegates((response: any) => {
      console.log("response:, ", response);
      this.delegates = response.delegates;
    });
  }

}
