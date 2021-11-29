import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>Hello</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color?: 'primary' | 'secondary';
  @Input() warn?: boolean;
}
