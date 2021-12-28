import { Directive, OnInit, EventEmitter, HostListener, Input, Output, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color: string = 'green';
  @Input() fontColor?: string;

  @Output() highlight: EventEmitter<void> = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = this.color;

    if (this.fontColor) {
      this.elementRef.nativeElement.style.backgroundColor = this.fontColor;
    }

    this.highlight.emit();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'transparent';
  }
}
