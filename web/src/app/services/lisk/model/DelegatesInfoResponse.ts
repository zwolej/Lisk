import { LiskResponse } from './LiskResponse';
import { DelegateDto } from './DelegateDto';

export class DelegatesInfoResponse extends LiskResponse {

  delegates: DelegateDto[];

}
