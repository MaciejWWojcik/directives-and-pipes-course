import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {

  constructor() { }

  // TODO log to console when user clicks on this element
}
