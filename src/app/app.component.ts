import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  value: number = 64;

  increase() {
    this.value = this.value + 4;
  }

  decrease() {
    this.value = this.value - 4;
  }
}
