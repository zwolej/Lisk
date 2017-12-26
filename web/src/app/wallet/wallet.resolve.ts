import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {LiskService} from "../services/LiskService";
import {ErrorService} from "../services/ErrorService";
import {VoteDto} from "../services/model/VoteDto";

@Injectable()
export class WalletResolve implements Resolve<any> {

  constructor(private liskService: LiskService, private router: Router, private errorService: ErrorService) { }

  resolve(route: ActivatedRouteSnapshot): Promise<string> | boolean | VoteDto {
    let address = +route.params['address'];
    console.log("returning data: from resolve for " + address);

    return this.vos();
    // return this.heroService.getHero(id).then(hero => {
    //   if (hero) {
    //     return hero;
    //   } else { // id not found
    //     this.router.navigate(['/dashboard']);
    //     return false;
    //   }
    // });
  }

  vos(): VoteDto {
    let vote = new VoteDto()
    vote.address = "a";
    vote.username = "u";
    vote.rate = 1;
    vote.rank = 1;
    return vote;
  }
}
