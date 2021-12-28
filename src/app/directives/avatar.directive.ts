import { Directive, ElementRef, Input, OnChanges, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnChanges {

  @Input() size: number = 64;
  @Output() zoom = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.transform = 'scale(1.1)';
    this.zoom.emit(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.transform = 'scale(1)';
    this.zoom.emit(false);
  }

  ngOnChanges() {
    this.elementRef.nativeElement.style.width = this.size + 'px';
    this.elementRef.nativeElement.style.height = this.size + 'px';
  }
}
