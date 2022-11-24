import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';


const ROWS_HEIGHT: {[id: number]: number} = {1: 400, 2: 355, 3: 350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productsSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort)
      .subscribe((_products) => {
      this.products = _products;
    })
  }
  
  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols]
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

  onItemsCountChange(newCount: number): void { 
    this.count = newCount.toString();
    this.getProducts()
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts()
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
