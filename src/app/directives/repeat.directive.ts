import {
  Directive,
  OnInit,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective implements OnInit {

  @Input('appRepeat') repeats!: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnInit() {
    this.viewContainerRef.clear();
    for (let i = 0; i < this.repeats; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
