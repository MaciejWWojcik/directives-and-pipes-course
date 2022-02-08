import { Pipe, PipeTransform } from '@angular/core';
import { Account, User } from '../user';

@Pipe({
  name: 'accountType'
})
export class AccountTypePipe implements PipeTransform {

  transform(): string {
    // TODO implement transformation function
    // TODO return a message based on the account type
    // - Premium account should read: “Premium account”
    // - Standard account should read: “Standard account”
    // - Trials account should read: “Account on Trial”

    return '';
  }

}
