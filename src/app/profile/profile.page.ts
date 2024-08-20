import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { navAnimation } from '../animation/navAnimation';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  currentCalories: number = 1156;
  maxCalories: number = 1500;

  goal: number = 1500;
  maxGoal: number = 1500;

  protein: number = 102;
  maxProtein: number = 150;

  fat: number = 83;
  maxFat: number = 100;
  selectedCardIndex: number | null = null;

  categories: Category[] = [];
  products: Product[] = [];
  selectedCard: any = null;
  constructor(private productService: ProductService,
    private router: Router,
    private navCtrl: NavController) {
    this.products = this.productService.getProduct();
  }

  ngOnInit() {
  }

  rotateGauge(): string {
    const rotation = (this.currentCalories / this.maxCalories) * 180;
    return `rotate(${rotation}deg)`;
  }

  calculateStrokeDashOffset(value: number, maxValue: number): number {
    const maxDashOffset = 283; // 2 * PI * radius(45% of 80px)
    return maxDashOffset - (value / maxValue) * maxDashOffset;
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
