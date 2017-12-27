import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LiskService} from "../services/LiskService";
import {AccountDto} from "../services/model/AccountDto";

@Component({
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  addressData: AccountDto;

  constructor(private liskService: LiskService, private route: ActivatedRoute) {
    route.params.subscribe(() => {
      this.addressData = this.route.snapshot.data['wallet'];
      this.addressData.votes = this.route.snapshot.data['votes'];
    });
  }

}
