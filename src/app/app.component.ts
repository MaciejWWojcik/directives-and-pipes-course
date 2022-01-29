import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onImageRescale(scaled: boolean) {
    console.log('image zoom' + (scaled ? 'in' : 'out'));
  }
}
