import { LiskResponse } from './LiskResponse';
import { DelegateDto } from './DelegateDto';

export class VotedDelegateResponse extends LiskResponse {

  delegates: DelegateDto[];

}
