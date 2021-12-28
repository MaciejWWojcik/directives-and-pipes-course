import { Directive, ElementRef, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Directive({
  selector: 'img[appImage]'
})
export class ImageDirective implements OnInit {
  @Input('appImage') product!: Product;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.setAttribute('loading', 'lazy');
    this.elementRef.nativeElement.setAttribute('alt', `Image shows ${this.product.name}`);
    this.elementRef.nativeElement.setAttribute('src', this.product.image);
  }
}
