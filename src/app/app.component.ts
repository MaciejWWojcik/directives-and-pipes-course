import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// using unicode here instead of plain emojis
  fruits = ['&#127822;', '&#127821;', '&#127820;', '&#127817;', '&#127827;'];
  activeIndex?: number;
}
