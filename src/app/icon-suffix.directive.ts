import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: 'icon-suffix, [iconSuffix]'
})
export class IconSuffixDirective {
  @HostBinding('class') buttonClass = 'button-icon icon-suffix';
}
