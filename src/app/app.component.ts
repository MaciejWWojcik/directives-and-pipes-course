import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  product: Product = {
    name: 'Product 1',
    id: 'p-1',
    description: 'Product 1 description',
    image: '/assets/p1.png',
    price: 110,
  };

  product2: Product = {
    name: 'Product 2',
    id: 'p-2',
    description: 'Product 2 description',
    image: '/assets/p2.png',
    price: 90,
  };

  product3: Product = {
    name: 'Product 3',
    id: 'p-3',
    description: 'Product 3 description',
    image: '/assets/p3.png',
    price: 150,
  };
}
