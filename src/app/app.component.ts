import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  name: string | null = null;

  ngOnInit() {
    setTimeout(() => this.name = 'John', 10000);
    setTimeout(() => this.name = null, 20000);
  }
}
