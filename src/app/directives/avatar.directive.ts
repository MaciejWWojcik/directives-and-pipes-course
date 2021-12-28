import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'img[appAvatar]'
})
export class AvatarDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    const size = '72px';
    this.elementRef.nativeElement.style.width = size;
    this.elementRef.nativeElement.style.height = size;
    this.elementRef.nativeElement.style.border = `1px solid gold`;
    this.elementRef.nativeElement.style.borderRadius = size;
  }
}
