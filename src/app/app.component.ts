import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // TODO use ViewChild to gather the inputs

  array = Array(5).fill(true); // initialize Array of size 5 for NgFor

  addRow(){
    // add one more row to the array
    this.array.push(true);
  }

  save() {
    // TODO get the values
    // TODO console log the gathered texts
  }
}
