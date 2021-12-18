import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[app]' // TODO update the selector
})
export class ButtonDirective implements OnChanges {

  // TODO get color-mode value
  // TODO get size value

  constructor() {
  }

  ngOnChanges() {
    // TODO update styles: background color & font color
    // TODO update size
  }
}
