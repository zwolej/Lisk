import {LiskResponse} from "./LiskResponse";

export class DelegateDto extends LiskResponse {

  address: string;
  username: string;
  rank: number;
  rate: number;

}
