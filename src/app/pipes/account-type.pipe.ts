import { Pipe, PipeTransform } from '@angular/core';
import { Account } from '../user';

@Pipe({
  name: 'accountType'
})
export class AccountTypePipe implements PipeTransform {

  transform(account: Account): string {
    if (account === Account.Premium) return "Premium account";
    if (account === Account.Standard) return "Standard account";
    if (account === Account.Trial) return "Account on Trial";

    return '';
  }

}
