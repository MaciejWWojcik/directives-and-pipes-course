import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[appCheckbox][type="checkbox"]'
})
export class CheckboxDirective {

  public get isChecked(): boolean {
    return this.elementRef.nativeElement.checked;
  }

  constructor(private elementRef: ElementRef) {
  }
}
