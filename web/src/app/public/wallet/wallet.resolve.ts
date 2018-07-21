import {forkJoin as observableForkJoin,  Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { LiskService } from '../../services/LiskService';
import { WalletResponse } from '../../services/lisk/model/WalletResponse';
import { VotedDelegateResponse } from '../../services/lisk/model/VotedDelegateResponse';

@Injectable()
export class WalletResolve implements Resolve<any> {

  constructor(private liskService: LiskService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const address = route.params['address'];

    return observableForkJoin(
      this.liskService.getAccount(address).pipe(map((res: WalletResponse) => res.account)),
      this.liskService.getAccountVotes(address).pipe(map((res: VotedDelegateResponse) => res.delegates))
    );
  }

}
