import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {LiskService} from "../services/LiskService";
import {ErrorService} from "../services/ErrorService";
import {VoteDto} from "../services/model/VoteDto";
import { WalletResponse } from "../services/model/WalletResponse";
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { AccountDto } from "../services/model/AccountDto";

@Injectable()
export class WalletBasicResolve implements Resolve<any> {

  constructor(private liskService: LiskService, private router: Router, private errorService: ErrorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | boolean | VoteDto {
    let address = route.params['address'];

    return Observable.create((observer: Observer<any>) => {
      this.liskService.getAccount(address, (response: WalletResponse) => {
        if (!response.success) {
          this.errorService.redirectToErrorPage(response);
          observer.error(response.error);
          return;
        }

        observer.next(response.account);
        observer.complete();
      });
    });
  }

}
