import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  @Input() name?: string | null;

  ngOnInit() {
    console.log('🌱 Creating UserComponent')
  }

  ngOnDestroy() {
    console.log('💀 Destroying UserComponent')
  }

}
