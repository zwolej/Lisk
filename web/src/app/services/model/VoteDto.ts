import {LiskResponse} from "./LiskResponse";

export class VoteDto extends LiskResponse {

  address: string;
  username: string;
  rank: number;
  rate: number;

}
