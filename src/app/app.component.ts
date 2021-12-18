import { Component, OnInit } from '@angular/core';
import { UserRole } from './models/user-role';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  roles: UserRole[] = [UserRole.BasicUser];

  readonly UserRole = UserRole;

  constructor(
    private accountService: UserService,
  ) {
  }

  ngOnInit() {
    setTimeout(() => this.roles = [UserRole.PremiumUser], 5000);
  }

  changeUserRole(role: UserRole) {
    this.accountService.changeRole(role);
  }

}
