import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LiskService} from "../services/LiskService";
import {WalletResponse} from "../services/model/WalletResponse";
import {AccountDto} from "../services/model/AccountDto";
import {ErrorService} from "../services/ErrorService";
import {VotedDelegateResponse} from "../services/model/VotedDelegateResponse";

@Component({
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  addressData: AccountDto;

  constructor(private liskService: LiskService, private route: ActivatedRoute, private errorService: ErrorService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.addressData = new AccountDto();
      this.addressData.votes = data.hero;
      console.log("z resolve1:", data);
      console.log("z resolve2:", data.hero);
      console.log("z resolve3:", this.addressData.votes);
    });

    // this.route.params.subscribe(params => {
    //   const address = params['address'];
    //
    //   this.liskService.getAccount(address, (response: WalletResponse) => {
    //     if (!response.success) {
    //       this.errorService.redirectToErrorPage(response);
    //       return;
    //     }
    //
    //     this.addressData = response.account;
    //
    //     this.liskService.getAccountVotes(address, (response: VotedDelegateResponse) => {
    //       if (!response.success) {
    //         this.errorService.redirectToErrorPage(response);
    //         return;
    //       }
    //
    //       this.addressData.votes = response.delegates;
    //     });
    //
    //   });
    //
    // });
  }

}
