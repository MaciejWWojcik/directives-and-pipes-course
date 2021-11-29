import { Component, Input } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-premium-user',
  templateUrl: './premium-user.component.html',
  styleUrls: ['./premium-user.component.scss']
})
export class PremiumUserComponent {
  @Input() user: User;
}
