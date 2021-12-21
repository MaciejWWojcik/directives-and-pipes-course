import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  template: `<p [ngStyle]="{'fontWeight': fontWeightStyle }">Hello there</p>`,
})
export class TextComponent {
  @Input() isBold: boolean = false;

  get fontWeightStyle(): string {
    // returning style value depending on the input variable
    if (this.isBold) {
      return 'bold';
    } else {
      return 'normal';
    }
  }
}
