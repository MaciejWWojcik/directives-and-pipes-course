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

}
