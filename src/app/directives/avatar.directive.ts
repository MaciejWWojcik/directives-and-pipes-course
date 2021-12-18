import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAvatar]' // TODO update selector so the directive applies only to images
})
export class AvatarDirective implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // TODO set size to 72px x 72px
    // TODO add yellow, 1px border
    // TODO round the element, so it is in the shape of the circle
  }
}
