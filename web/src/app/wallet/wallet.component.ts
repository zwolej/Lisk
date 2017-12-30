import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AccountDto} from "../services/lisk/model/AccountDto";

@Component({
  templateUrl: './wallet.component.html'
})
export class WalletComponent {

  addressData: AccountDto;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(() => {
      console.log("zwrotka1:", this.route.snapshot.data['info'][0]);
      console.log("zwrotka2:", this.route.snapshot.data['info'][1]);
      this.addressData = this.route.snapshot.data['info'][0];
      this.addressData.votes = this.route.snapshot.data['info'][1];
    });
  }

}
