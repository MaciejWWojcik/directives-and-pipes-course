import { Pipe, PipeTransform } from '@angular/core';
import { Account, User } from './user';

@Pipe({
  name: 'accountType'
})
export class AccountTypePipe implements PipeTransform {

  transform(user: User): string {
    if(user.account === Account.Premium) return "Premium account";
    if(user.account === Account.Standard) return "";
    if(user.account === Account.Trial) return "this account is on 30-days trial";

    // in every other case return the empty string
    return ""
  }

}
