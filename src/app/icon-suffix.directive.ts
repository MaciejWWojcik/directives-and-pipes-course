import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[iconSuffix]'
})
export class IconSuffixDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.marginLeft = '8px';
  }
}
