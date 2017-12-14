import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

declare var lisk: any;

@Injectable()
export class LiskService {

  private api: any;

  constructor() {
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

}
