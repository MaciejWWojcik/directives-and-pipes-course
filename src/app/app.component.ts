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

  onSave() {
    console.log('Data on save: ', this.name, this.email, this.agreement);
  }
}
