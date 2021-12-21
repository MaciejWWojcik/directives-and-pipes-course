import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="{'app-button': true, 'button-active':isActive }">Hello</button>`,
})
export class ButtonComponent {
  @Input() isActive = false;
}
