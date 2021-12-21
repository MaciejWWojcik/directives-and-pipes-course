import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  // TODO add NgClass directive and pass there correct class-names based on values of the component's properties
  template: `<button>Hello</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color?: 'primary' | 'secondary';
  @Input() warn?: boolean;
}
