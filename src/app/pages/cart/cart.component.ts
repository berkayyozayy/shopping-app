import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/200',
        name: 'blabla',
        price: 200,
        quantity: 1,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/200',
        name: 'blabla',
        price: 200,
        quantity: 1,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/200',
        name: 'blabla',
        price: 200,
        quantity: 1,
        id: 1,
      },
      
    ]
  }
  dataSource: CartItem[] = [];
  displayedColumns: Array<string> = ['product', 'name', 'price', 'quantity', 'total', 'action'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

  getTotal(items: Array<CartItem>): number {
    return items.
      map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0)
  }

}
