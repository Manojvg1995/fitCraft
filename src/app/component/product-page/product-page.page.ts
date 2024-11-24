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
export class ProductPagePage {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCard: any = null;
  selectedCardIndex: number | null = null;
  constructor(private productService: ProductService,
    private router: Router,
    private navCtrl: NavController) {
    this.products = this.productService.getProduct();

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

  navigateToPlaceOrderPage(){
    this.router.navigate(['/pages/book-product']);
  }

  topCollectorOfTheMonthList =  [ 
    {
      id: 1,
      title: "@MrRocket98",
      price: 900,
      priceDesciption:"/month",
      image: "/assets/images/_aaapremiumyogasanas2.jpeg",
      description: "Get access to our state-of-the-art gym equipment and expert trainers"
    },
    {
      id: 2,
      title: "@Lighterman",
      price: 700,
      priceDesciption:"/month",
      image: "/assets/images/_aaapremiumyogasanas1.jpeg",
      description: "Work one-on-one with our certified trainers to achieve your fitness goals"
    },
    {
      id: 3, 
      title: "@Robotino",
      price: 700,
      priceDesciption:"/month",
      image: "/assets/images/_aaapremiumyogasanas1.jpeg",
      description: "Work one-on-one with our certified trainers to achieve your fitness goals"
    },
    {
      id: 4, 
      title: "@Cool Skull",
      price: 700,
      priceDesciption:"/month",
      image: "/assets/images/_aaapremiumyogasanas1.jpeg",
      description: "Work one-on-one with our certified trainers to achieve your fitness goals"
    } 
  ]

  runCraftNftList = [
    {
      id: 1,
      title: 'Get Together',
      image: 'assets/images/Get_together.png',
      bidNum: '0.8 ETH'
    },
    {
      id: 2,
      title: 'sporty',
      image: 'assets/images/Sporty.png',
      bidNum: '0.7 ETH'
    }
  ];

  classyCraftNftList = [
    {
      id: 1,
      title: '60 degree',
      image: 'assets/images/_aaaNFT26.jpeg',
      bidNum: '0.8 ETH'
    },
    {
      id: 2,
      title: 'Mr.Slide',
      image: 'assets/images/_aaaNFT25.jpeg',
      bidNum: '0.7 ETH'
    },
    {
      id: 3,
      title: 'Wellwet',
      image: 'assets/images/wllwet.jpg',
      bidNum: '0.7 ETH'
    },
    {
      id: 4,
      title: 'Hello Hello',
      image: 'assets/images/_aaaNFT24.jpeg',
      bidNum: '0.7 ETH'
    }
  ];

  yogiNft = [
    {
      id: 1,
      title: 'wellwet',
      image: 'assets/images/Adiyogi.png',
      bidNum: '0.8 ETH'
    },
    {
      id: 3,
      title: 'Wellwet',
      image: 'assets/images/More_stronger.jpg',
      bidNum: '0.7 ETH'
    }
  ];

  
}
