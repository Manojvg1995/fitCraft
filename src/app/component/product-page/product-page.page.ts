import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { navAnimation } from 'src/app/animation/navAnimation';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCard: any = null;
  selectedCardIndex: number | null = null;
  constructor(private productService: ProductService,
    private router: Router,
    private navCtrl: NavController) {
    this.products = this.productService.getProduct();

  }

  ngOnInit() {
  }

  onCardSelect(item: any, index: number) {
    if (this.selectedCardIndex === index) {
      this.selectedCardIndex = null;
      this.selectedCard = null;
    } else {
      this.selectedCardIndex = index;
      this.selectedCard = item;
    }
    this.navCtrl.navigateForward('/pages/book-product', {
      animation: navAnimation
    });
    // this.router.navigate(['/pages/book-product']);
    console.log(JSON.stringify(item), index)
  }

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
