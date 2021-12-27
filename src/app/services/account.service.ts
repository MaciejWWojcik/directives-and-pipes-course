import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentAccount: Account = {
    fullName: 'John Doe',
    premium: false,
    username: 'john-doe'
  }
}
