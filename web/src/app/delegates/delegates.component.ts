import {Component } from '@angular/core';
import {DelegateDto} from "../services/lisk/model/DelegateDto";
import {ActivatedRoute} from "@angular/router";
import find from 'lodash-es/find'
import map from 'lodash-es/map'
import assign from 'lodash-es/assign'
import {DelegateAdditionalDto} from "../services/internal/model/DelegateAdditionalDto";
import {FullDelegateDto} from "../services/internal/model/FullDelegateDto";

@Component({
  templateUrl: './delegates.component.html'
})
export class DelegatesComponent {

  delegates: FullDelegateDto[];

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(() => {
      const liskDelegates: DelegateDto[] = this.route.snapshot.data['info'][0];
      const databaseDelegates: DelegateAdditionalDto[] = this.route.snapshot.data['info'][1];
      this.mergeDatabseInfoWithLisknet(liskDelegates, databaseDelegates);
    });
  }

  private mergeDatabseInfoWithLisknet(liskDelegates: DelegateDto[], databaseDelegates: DelegateAdditionalDto[]) {
    const mergedResult = map(liskDelegates, function(obj) {
      return assign(obj, find(databaseDelegates, {address: obj.address}));
    });
    this.delegates = mergedResult;
  }

}
