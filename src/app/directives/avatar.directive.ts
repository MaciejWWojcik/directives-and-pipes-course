import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnChanges {

  @Input() size: number = 64;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges() {
    this.elementRef.nativeElement.style.width = this.size + 'px';
    this.elementRef.nativeElement.style.height = this.size + 'px';
  }
}
