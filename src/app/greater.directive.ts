import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGreater]'
})
export class GreaterDirective implements OnInit {

  @Input('appGreater') value!: number;
  @Input('appGreaterElse') alternativeTemplate?: TemplateRef<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnInit() {
    this.viewContainerRef.clear();

    // create view if value > 10
    if (this.value > 10) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      return;
    }

    // create alternative view if value < 10
    if (this.value < 10 && this.alternativeTemplate) {
      this.viewContainerRef.createEmbeddedView(this.alternativeTemplate);
      return;
    }
  }
}
