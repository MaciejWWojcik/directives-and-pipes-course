import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnInit {

  @Input() size: string | undefined;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.width = this.size;
    this.elementRef.nativeElement.style.height = this.size;
  }
}
