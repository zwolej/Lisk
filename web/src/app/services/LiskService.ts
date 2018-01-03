import { Injectable } from '@angular/core';
import { WalletResponse } from './lisk/model/WalletResponse';
import { Router } from '@angular/router';
import { VotedDelegateResponse } from './lisk/model/VotedDelegateResponse';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { ErrorService } from './ErrorService';
import { DelegatesInfoResponse } from './lisk/model/DelegatesInfoResponse';
import { LiskResponse } from './lisk/model/LiskResponse';
import 'rxjs/add/operator/map';

declare var lisk: any;

@Injectable()
export class LiskService {

  private static MAX_CHOOSEN_DELEGATES_NUMBER = 101;
  private api: any;

  constructor(private router: Router, private errorService: ErrorService) {
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

  public getDelegates(): Observable<DelegatesInfoResponse> {
    return Observable.create((observer: Observer<DelegatesInfoResponse>) => {
      this.api.listActiveDelegates(LiskService.MAX_CHOOSEN_DELEGATES_NUMBER, this.handleLiskResponse(observer));
    });
  }

  public getAccount(address: string): Observable<WalletResponse> {
    return Observable.create((observer: Observer<WalletResponse>) => {
      this.api.getAccount(address, this.handleLiskResponse(observer));
    });
  }

  public getAccountVotes(address: string): Observable<VotedDelegateResponse> {
    return Observable.create((observer: Observer<VotedDelegateResponse>) => {
      this.api.listVotes(address, this.handleLiskResponse(observer));
    });
  }

  private handleLiskResponse<T extends LiskResponse>(observer: Observer<T>) {
    return (response: T) => {
      if (!response.success) {
        observer.error(response.error);
        this.errorService.redirectToErrorPage(response);
        return;
      }

      observer.next(response);
      observer.complete();
    };
  }

}
