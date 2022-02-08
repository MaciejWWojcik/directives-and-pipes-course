import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Product[] = [
    {
      name: 'Product 1',
      id: 'p-1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/p1.png',
      price: 110.00,
      dateOfAdd: new Date('7/13/2022'),
    },
    {
      name: 'Product 2',
      id: 'p-2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/p2.png',
      price: 90.99,
      dateOfAdd: new Date('12/07/2022'),
    },
    {
      name: 'Product 3',
      id: 'p-3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/p3.png',
      price: 150.55,
      dateOfAdd: new Date('1/01/2022'),
    }
  ];
}
