import { Component } from '@angular/core';
import { Account } from './models/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  premiumAccount: Account = {
    fullName: 'John Doe',
    premium: true,
    username: 'john-doe'
  };

  nonPremiumAccount: Account = {
    fullName: 'John Doe',
    premium: false,
    username: 'john-doe'
  };

}
