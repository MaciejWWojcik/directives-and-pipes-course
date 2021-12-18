import { Directive, OnInit, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // TODO get background color data
  // TODO get optional font color data

  constructor() {
  }

  // TODO update styles: background colour - on mouse over

  // TODO emit values when element is highlighted
}
