import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(el: ElementRef) {
    // using ElementRef instance to apply style changes:
    el.nativeElement.style.fontWeight = 'bold';
  }
}
