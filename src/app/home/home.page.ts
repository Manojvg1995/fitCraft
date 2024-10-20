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
        "label": "Products",
        "image": "/assets/icon/running-shoes.png",
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

  selectedTab: string = 'gymCraft'; // Default selected tab
  selectedSubTab: string = 'discover'
  selectTab(tab: string) {
    this.selectedTab = tab;
    // You can add additional logic to handle tab changes, such as loading content specific to the selected tab.
  }

  selecteSubTab(selectedSubTab: string){
    this.selectedSubTab = selectedSubTab;
  }

  yogaLiveClassList = [
    {
      id: 1,
      title: "Yoga Live Class",
      price: 900,
      priceDesciption:"/month",
      image: "/assets/images/yogaliveclass1.jpeg",
      description: "Get access to our state-of-the-art gym equipment and expert trainers"
    },
    {
      id: 2,
      title: "Dhyana Live Class",
      price: 700,
      priceDesciption:"/month",
      image: "/assets/images/gym2.jpeg",
      description: "Work one-on-one with our certified trainers to achieve your fitness goals"
    },
    {
      id: 3,
      title: "Super Meditation",
      price: 2100,
      priceDesciption:"/6month",
      image: "/assets/images/yogaliveclass2.jpeg",
      description: "Join our expert instructors for a variety of yoga classes"
    }
  ]

  gymLiveClassList =  [
    {
      id: 1,
      title: "Daily Work Out",
      price: 900,
      priceDesciption:"/month",
      image: "/assets/images/gym4.jpeg",
      description: "Get access to our state-of-the-art gym equipment and expert trainers"
    },
    {
      id: 2,
      title: "Get Set THIN",
      price: 700,
      priceDesciption:"/month",
      image: "/assets/images/gym4.jpeg",
      description: "Work one-on-one with our certified trainers to achieve your fitness goals"
    }
  ]
}
