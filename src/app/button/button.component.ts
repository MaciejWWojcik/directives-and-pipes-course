import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="buttonClass">Hello</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color?: 'primary' | 'secondary';
  @Input() warn?: boolean;

  // getter bound to ngClass in the template
  get buttonClass(): string {
    let classNames = 'app-button ';

    if (this.warn) {
      classNames += 'warn-button';
    } else {
      // if it's not in warn mode then apply classes according to color mode
      if (this.color === 'primary') {
        classNames += 'primary-button';
      }
      if (this.color === 'secondary') {
        classNames += 'secondary-button';
      }
    }

    return classNames;
  }
}
