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

  user$: Observable<User> | undefined;

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    // get user from the service (as Observable)
    this.user$ = this.userService.getUser();
  }

}
