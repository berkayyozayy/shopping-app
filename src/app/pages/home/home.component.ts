import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';


const ROWS_HEIGHT: {[id: number]: number} = {1: 400, 2: 355, 3: 350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  
  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols]
    console.log('rowHeight ',this.rowHeight);
  }
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      price: product.price,
      product: product.image,
      name: product.title,
      quantity: 1,
    })
  }
}
