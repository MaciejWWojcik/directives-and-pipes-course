import { Component } from '@angular/core';
import { Account, User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User = {
    name: 'John',
    lastname: 'Doe',
    account: Account.Premium,
  }
}
