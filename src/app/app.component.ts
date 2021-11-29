import { Component } from '@angular/core';

interface User {
  name: string;
  premium: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: User[] = [
    { name: 'John Doe', premium: false },
    { name: 'Jane Doe', premium: true },
    { name: 'Alice Doe', premium: true },
    { name: 'Bob Doe', premium: true },
  ];
}
