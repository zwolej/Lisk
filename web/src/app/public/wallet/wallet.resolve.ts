import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { LiskService } from '../../services/LiskService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { WalletResponse } from '../../services/lisk/model/WalletResponse';
import { VotedDelegateResponse } from '../../services/lisk/model/VotedDelegateResponse';

@Injectable()
export class WalletResolve implements Resolve<any> {

  constructor(private liskService: LiskService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const address = route.params['address'];

    return Observable.forkJoin(
      this.liskService.getAccount(address).map((res: WalletResponse) => res.account),
      this.liskService.getAccountVotes(address).map((res: VotedDelegateResponse) => res.delegates)
    );
  }

}
