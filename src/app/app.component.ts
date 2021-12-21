import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  premium: boolean | undefined;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: User[] = [
    { id: 1, name: 'John Doe', premium: false },
    { id: 2, name: 'Jane Doe', premium: true },
    { id: 3, name: 'Alice Doe', premium: true },
    { id: 4, name: 'Bob Doe', premium: undefined },
  ];
}
