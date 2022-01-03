import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[appText][type="text"]'
})
export class TextDirective {

  public get value(): string {
    return this.elementRef.nativeElement.value;
  }

  constructor(private elementRef: ElementRef) {
  }
}
