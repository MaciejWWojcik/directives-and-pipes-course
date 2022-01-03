import { Component, QueryList, ViewChildren } from '@angular/core';
import { CheckboxDirective } from './checkbox.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChildren(CheckboxDirective) checks: QueryList<CheckboxDirective> | undefined;

  calculate() {
    let count = 0;
    this.checks?.forEach(checkbox => {
      // check if the input is checked
      if (checkbox.isChecked) {
        // add 1 to the count
        count = count + 1;
      }
    });
    console.log(count);
  }
}
