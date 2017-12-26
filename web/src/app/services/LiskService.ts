import { Injectable } from '@angular/core';
import {WalletResponse} from "./model/WalletResponse";
import {Router} from "@angular/router";
import {VotedDelegateResponse} from "./model/VotedDelegateResponse";

declare var lisk: any;

@Injectable()
export class LiskService {

  private api: any;

  constructor(private router: Router) {
    const options = {
      ssl: false,
      node: '',
      randomPeer: true,
      testnet: true,
      port: '7000',
      bannedPeers: [],
    };
    this.api = lisk.api(options);
  }

  public getActiveDelegates(callback: (n: any) => any): void {
    this.api.listActiveDelegates(5, (data) => {
      callback(data);
    });
  }

  public getAccount(address: string, callback: (n: WalletResponse) => any): void {
    this.api.getAccount(address, (data: WalletResponse) => {
      callback(data);
    });
  }

  public getAccountVotes(address: string, callback: (n: VotedDelegateResponse) => any): void {
    this.api.listVotes(address, (data: VotedDelegateResponse) => {
      callback(data);
    });
  }

}
