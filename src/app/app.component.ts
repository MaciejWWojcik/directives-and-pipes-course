import { Component } from '@angular/core';

interface User {
  id: number;
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
    { id: 1, name: 'John Doe', premium: false },
    { id: 2, name: 'Jane Doe', premium: true },
    { id: 3, name: 'Alice Doe', premium: true },
    { id: 4, name: 'Bob Doe', premium: true },
  ];

  //  TODO keep in component's property currently selected user or it's index;

  // TODO implement trackBy functions
}
