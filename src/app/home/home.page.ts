import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Category } from '../models/Category';
import { ProductService } from '../service/product.service';
import { Product } from '../models/Product';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { navAnimation } from '../animation/navAnimation';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  selectedCardIndex: number | null = null;

  categories: Category[] = [];
  products: Product[] = [];
  selectedCard: any = null;

  constructor(private productService: ProductService,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.getCategories();
    this.products = this.productService.getProduct();
    console.log("product : " + this.products)
  }

  onCategorySelected(category: Category) {
    console.log(category);
    this.categories.forEach(c => c.active = c.id === category.id);
  }

  getCategories() {
    this.categories = [
      {
        "id": 1,
        "label": "Gym",
        "image": "/assets/icon/treadmill.png",
        "active": true
      },
      {
        "id": 2,
        "label": "Yoga",
        "image": "/assets/icon/yoga.png",
        "active": false
      },
      {
        "id": 3,
        "label": "Weight loss",
        "image": "/assets/icon/slim.png",
        "active": false
      },
      {
        "id": 4,
        "label": "Dhyana",
        "image": "/assets/icon/meditation.png",
        "active": false
      },
      {
        "id": 5,
        "label": "Dhyana",
        "image": "/assets/icon/meditation.png",
        "active": false
      },
      {
        "id": 6,
        "label": "Dhyana",
        "image": "/assets/icon/meditation.png",
        "active": false
      },
      {
        "id": 7,
        "label": "Dhyana",
        "image": "/assets/icon/meditation.png",
        "active": false
      }
    ];
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
