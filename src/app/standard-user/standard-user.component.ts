import { Component, Input } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-standard-user',
  templateUrl: './standard-user.component.html',
  styleUrls: ['./standard-user.component.scss']
})
export class StandardUserComponent {
  @Input() user: User;
}
