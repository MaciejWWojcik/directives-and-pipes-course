import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChildren('check') checks: QueryList<ElementRef> | undefined;

  calculate() {
    let count = 0;
    this.checks?.forEach(input => {
      // check if the input is checked
      if (input.nativeElement.checked === true) {
        // add 1 to the count
        count = count + 1;
      }
    });
    console.log(count);
  }
}
