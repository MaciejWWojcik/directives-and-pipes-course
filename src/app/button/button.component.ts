import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngClass]="buttonClass">Hello</button>`,
})
export class ButtonComponent {
  buttonClass = [
    'app-button',
    'button-active'
  ];
}
