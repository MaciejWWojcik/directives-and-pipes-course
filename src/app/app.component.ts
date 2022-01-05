import { Component, QueryList, ViewChildren } from '@angular/core';
import { Account } from './model/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  premiumAccount: Account = {
    username: 'John',
    premium: true,
  }

  standardAccount: Account = {
    username: 'Jane',
    premium: false,
  }

  doSomething() {

  }
}
