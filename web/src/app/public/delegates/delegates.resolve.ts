import {forkJoin as observableForkJoin,  Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { LiskService } from '../../services/LiskService';
import { DelegatesInfoResponse } from '../../services/lisk/model/DelegatesInfoResponse';
import { DelegatesService } from '../../services/DelegatesService';

@Injectable()
export class DelegatesResolve implements Resolve<any> {

  constructor(private liskService: LiskService, private delegatesService: DelegatesService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return observableForkJoin(
      this.liskService.getDelegates().pipe(map((res: DelegatesInfoResponse) => res.delegates)),
      this.delegatesService.getAllDelegatesAdditionalData()
    );
  }

}
