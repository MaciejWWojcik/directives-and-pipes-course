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
  get buttonClass(): any {
    return {
      'app-button': true,
      'warn-button': this.warn,
      'primary-button': !this.warn && this.color === 'primary',
      'secondary-button': !this.warn && this.color === 'secondary',
    };
  }
}
