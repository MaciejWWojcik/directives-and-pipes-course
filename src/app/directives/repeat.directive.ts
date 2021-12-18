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

  // TODO get amount of elements to render

  constructor() {
  }

  ngOnInit() {
    // TODO render elements, based on the passed amount
  }
}
