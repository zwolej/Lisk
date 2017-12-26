import {VoteDto} from "./VoteDto";

export class AccountDto {

  address: string;
  balance: string;
  publicKey: string;
  votes: VoteDto[];

}
