import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]' // TODO think about different selectors that we can use here
})
export class BoldDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.fontWeight = 'bold';
  }
}
