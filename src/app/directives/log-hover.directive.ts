import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogHover]'
})
export class LogHoverDirective {

  @HostListener('mouseenter')
  onClick() {
    console.log(`action: mouse over - ${Date.now()}`);
  }

}
