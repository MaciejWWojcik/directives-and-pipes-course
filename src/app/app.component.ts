import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string = '';
  email: string = '';
  agreement: boolean = false;

  onEmailChange(email: string) {
    this.email = email;
    console.log('email changed: ', this.email);
  }

  onSave() {
    console.log('Data on save: ', this.name, this.email, this.agreement);
  }
}
