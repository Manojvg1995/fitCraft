import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.page.html',
  styleUrls: ['./product-cart.page.scss'],
})
export class ProductCartPage implements OnInit {
  quantities: any = { 1: 1, 2: 1 };

  constructor() { }

  ngOnInit() { }

  increaseQuantity(itemId: number) {
    this.quantities[itemId]++;
  }

  decreaseQuantity(itemId: number) {
    if (this.quantities[itemId] > 1) {
      this.quantities[itemId]--;
    }
  }


}
