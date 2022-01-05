import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: 'icon-prefix, [iconPrefix]'
})
export class IconPrefixDirective {
  @HostBinding('class') buttonClass = 'button-icon icon-prefix';
}
