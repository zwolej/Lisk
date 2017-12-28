import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {LiskService} from "../services/LiskService";
import {ErrorService} from "../services/ErrorService";
import { WalletResponse } from "../services/model/WalletResponse";
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/forkJoin';
import { VotedDelegateResponse } from "../services/model/VotedDelegateResponse";

@Injectable()
export class WalletResolve implements Resolve<any> {

  constructor(private liskService: LiskService, private router: Router, private errorService: ErrorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let address = route.params['address'];

    let oneResult = null;
    const one =  Observable.create((observer: Observer<any>) => {
      this.liskService.getAccount(address, (response: WalletResponse) => {
        if (!response.success) {
          observer.error(response.error);
          this.errorService.redirectToErrorPage(response);
          return;
        }

        oneResult = response.account;
        observer.next(response.account);
        observer.complete();
      });
    });

    const two = Observable.create((observer: Observer<any>) => {
      this.liskService.getAccountVotes(address, (response: VotedDelegateResponse) => {
        if (!response.success) {
          this.errorService.redirectToErrorPage(response);
          observer.error(response.error);
          return;
        }

        observer.next(response.delegates);
        observer.complete();
      });
    });
    return Observable.forkJoin(one, two);
  }

}
