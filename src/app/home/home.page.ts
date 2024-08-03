import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Category } from '../models/Category';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  categories:Category[] = [];

  constructor() {
    this.getCategories();
   }

  getCategories(){
    this.categories = [
      {
          "id": 1,
          "label": "Gym",
          "image": "/assets/icon/treadmill.png",
          "active":true
      },
      {
          "id": 2,
          "label": "Yoga",
          "image": "/assets/icon/yoga.png",
          "active":false
      },
      {
        "id": 3,
        "label": "Weight loss",
        "image": "/assets/icon/slim.png",
        "active":false
      },
      {
          "id": 3,
          "label": "Dhyana",
          "image": "/assets/icon/meditation.png",
          "active":false
      }
    ];
  }
}
