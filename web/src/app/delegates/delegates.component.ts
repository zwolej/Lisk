import {Component, OnInit } from '@angular/core';
import { LiskService } from "../services/LiskService";
import { DelegatesService } from "../services/DelegatesService";

@Component({
  templateUrl: './delegates.component.html'
})
export class DelegatesComponent implements OnInit {

  delegates: any;

  constructor(private liskService: LiskService, private delegatesService: DelegatesService) { }

  ngOnInit(): void {
    this.liskService.getDelegates((response: any) => {
      console.log("response:, ", response);
      this.delegates = response.delegates;
    });

    this.delegatesService.getAllDelegatesAdditionalData().subscribe((data: any) => {
      console.log("hello response:", data)
    })
  }

}
