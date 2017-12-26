import {LiskResponse} from "./LiskResponse";
import {VoteDto} from "./VoteDto";

export class VotedDelegateResponse extends LiskResponse {

  delegates: VoteDto[];

}
