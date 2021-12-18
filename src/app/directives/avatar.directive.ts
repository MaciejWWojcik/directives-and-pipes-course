import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    const size = '64px';
    // setting width & height to 64px via instance of ElementRef
    this.elementRef.nativeElement.style.width = size;
    this.elementRef.nativeElement.style.height = size;
  }
}
