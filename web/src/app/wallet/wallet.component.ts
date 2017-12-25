import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LiskService} from "../services/LiskService";
import {WalletResponse} from "../services/model/WalletDto";
import {AccountDto} from "../services/model/AccountDto";
import {ErrorService} from "../services/ErrorService";

@Component({
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  addressData: AccountDto;

  constructor(private liskService: LiskService, private route: ActivatedRoute, private errorService: ErrorService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.liskService.getAccount(params['address'], (response: WalletResponse) => {
        if (!response.success) {
          this.errorService.redirectToErrorPage(response);
          return;
        }

        this.addressData = response.account;
      });

    });
  }

}
