import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  products:Product[] = [];
  
  constructor(private productService:ProductService) { }
  
  ngOnInit() {
    this.products = this.productService.getProduct();
  }

  addToCart(product:Product){
    
  }

  buyNow(product:Product){
    
  }
}
