import { Component, Input } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-unknown-user',
  templateUrl: './unknown-user.component.html',
  styleUrls: ['./unknown-user.component.scss']
})
export class UnknownUserComponent {
  @Input() user: User;
}
