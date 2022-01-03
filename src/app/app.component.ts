import { Component, QueryList, ViewChildren } from '@angular/core';
import { TextDirective } from './text.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChildren(TextDirective) texts: QueryList<TextDirective> | undefined;

  array = Array(5).fill(true); // initialize Array of size 5 for NgFor

  addRow(){
    // add one more row to the array
    this.array.push(true);
  }

  save() {
    // map values using the TextDirective API
    const texts = this.texts?.map(text => text.value);
    console.log(texts);
  }
}
