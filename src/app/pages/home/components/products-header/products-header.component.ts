import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
   ,
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  sort = "desc"
  itemsShowCount = 10

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

}