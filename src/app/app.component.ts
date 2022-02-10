import { Component, OnInit } from '@angular/core';
import { Account, User } from './user';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  // TODO: create a property, to keep Observable of data

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    // TODO get user from the service (as Observable)
  }

}
