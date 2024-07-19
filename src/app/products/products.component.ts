import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Hair Gel',
      description: 'Strong hold hair gel for all-day style.',
      price: 9.99,
      imageUrl: '../../../assets/images/hair-gel.jpg'
    },
    {
      id: 2,
      name: 'Beard Oil',
      description: 'Nourishing beard oil for a healthy shine.',
      price: 14.99,
      imageUrl: 'assets/images/istock.jpg'
    },
    {
      id: 3,
      name: 'Shampoo',
      description: 'Gentle shampoo for daily use.',
      price: 7.99,
      imageUrl: 'assets/images/shampoo.jpg'
    },
    {
      id: 4,
      name: 'Hair Wax',
      description: 'Flexible hair wax for easy styling.',
      price: 12.99,
      imageUrl: 'assets/images/hair-wax.jpg'
    },
    {
      id: 5,
      name: 'Beard Balm',
      description: 'Moisturizing beard balm for soft, manageable beard.',
      price: 11.99,
      imageUrl: 'assets/images/beard-balm.jpg'
    }
  ];
}
