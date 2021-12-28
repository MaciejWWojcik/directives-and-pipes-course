import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnChanges {

  @Input('appButton') color!: 'primary' | 'secondary';
  @Input() size: number = 120;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges() {
    this.elementRef.nativeElement.style.width = `${this.size}px`;

    if (this.color === 'primary') {
      this.elementRef.nativeElement.style.backgroundColor = 'deepskyblue';
      this.elementRef.nativeElement.style.color = 'white';
    }

    if (this.color === 'secondary') {
      this.elementRef.nativeElement.style.backgroundColor = 'gold';
      this.elementRef.nativeElement.style.color = 'black';
    }
  }
}
