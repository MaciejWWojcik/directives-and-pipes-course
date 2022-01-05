import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: 'button-title, [buttonTitle]'
})
export class ButtonTitleDirective {
  @HostBinding('class') buttonClass = 'button-title';
}
