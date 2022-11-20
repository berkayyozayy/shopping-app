import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
  
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter()
  product: Product | undefined = {
    id: 1,
    price: 200,
    title: 'blabla',
    category: 'electronic',
    description: 'Desc',
    image: 'https://via.placeholder.com/200.'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }
}
