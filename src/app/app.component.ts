import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  red: number = 200;
  green: number = 120;
  blue: number = 240;

  get redStyle() {
    return { backgroundColor: `rgb(${this.red},0,0)` };
  }

  get greenStyle() {
    return { backgroundColor: `rgb(0,${this.green},0)` };
  }

  get blueStyle() {
    return { backgroundColor: `rgb(0,0,${this.blue})` };
  }

  get resultStyle() {
    return { backgroundColor: `rgb(${this.red},${this.green},${this.blue})` };
  }

  updateRed(event: Event) {
    this.red = +(<HTMLInputElement>event.target).value;
  }

  updateGreen(event: Event) {
    this.green = +(<HTMLInputElement>event.target).value;
  }

  updateBlue(event: Event) {
    this.blue = +(<HTMLInputElement>event.target).value;
  }
}
