import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appClickLog]'
})
export class ClickLogDirective {

  @HostListener('click')
  onClick() {
    console.log('clicked');
  }
}
