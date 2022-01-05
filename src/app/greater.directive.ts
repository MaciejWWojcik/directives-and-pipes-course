import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGreater]'
})
export class GreaterDirective implements OnInit {

  // TODO add input properties

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnInit() {
    // TODO show view if value > 10

    // TODO show alternative view if value < 10

    // TODO show nothing if value == 10
  }
}
