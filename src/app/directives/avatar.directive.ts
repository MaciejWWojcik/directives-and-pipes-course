import { Directive, ElementRef, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';

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

  // TODO set the image scale when mouse is over
  // TODO emit event about that


  // TODO reset the image scale when mouse leaves element
  // TODO emit event about that

}
