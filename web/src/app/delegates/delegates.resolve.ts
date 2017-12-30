import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {LiskService} from "../services/LiskService";
import { Observable } from 'rxjs/Observable';
import {DelegatesInfoResponse} from "../services/lisk/model/DelegatesInfoResponse";
import {DelegatesService} from "../services/DelegatesService";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map'

@Injectable()
export class DelegatesResolve implements Resolve<any> {

  constructor(private liskService: LiskService, private delegatesService: DelegatesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return Observable.forkJoin(
      this.liskService.getDelegates().map((res: DelegatesInfoResponse) => res.delegates),
      this.delegatesService.getAllDelegatesAdditionalData()
    );
  }

}
