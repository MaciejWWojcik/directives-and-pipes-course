import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {
  @Input('appLogClick') actionName!: string;

  count: number = 0;

  @HostListener('click')
  onClick() {
    this.count = this.count + 1;
    console.log(`action: click - ${Date.now()} - count[${this.count}] - ${this.actionName}`);
  }
}
