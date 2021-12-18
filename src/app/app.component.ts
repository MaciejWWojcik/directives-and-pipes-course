import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onZoom(zoom: boolean) {
    zoom ? console.log('zoom in') : console.log('zoom out');
  }
}
