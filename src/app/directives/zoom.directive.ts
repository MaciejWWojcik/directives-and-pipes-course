import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';


@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @Output() zoom: EventEmitter<boolean> = new EventEmitter<boolean>();

  private zoomIn: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('click')
  onClick() {
    if (this.zoomIn) {
      // if element is zoomed in - reset the zoom, and send false as an event
      this.elementRef.nativeElement.style.transform = 'scale(1)';
      this.zoom.emit(false);
    } else {
      // if element is zoomed out - set the zoom, and send true as an event
      this.elementRef.nativeElement.style.transform = 'scale(1.1)';
      this.zoom.emit(true);
    }
    // update the value to match current state
    this.zoomIn = !this.zoomIn;
  }
}
