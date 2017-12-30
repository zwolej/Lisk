import { DelegateDto } from './DelegateDto';

export class AccountDto {

  address: string;
  balance: string;
  publicKey: string;
  votes: DelegateDto[];

}
