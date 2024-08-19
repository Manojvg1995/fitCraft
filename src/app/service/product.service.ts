import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor() { }

  getProduct():Product[]{
    return  [
      {
        id: 1,
        title: "Powerhouse Gym",
        price: 900,
        priceDesciption:"/month",
        image: "/assets/images/gym1.jpeg",
        description: "Get access to our state-of-the-art gym equipment and expert trainers"
      },
      {
        id: 2,
        title: "FitZone Gym",
        price: 700,
        priceDesciption:"/month",
        image: "/assets/images/gym2.jpeg",
        description: "Work one-on-one with our certified trainers to achieve your fitness goals"
      },
      {
        id: 3,
        title: "Pulse Gym",
        price: 2100,
        priceDesciption:"/6month",
        image: "/assets/images/gym3.jpeg",
        description: "Join our expert instructors for a variety of yoga classes"
      },
      {
        id: 4,
        title: "Core Fitness Gym",
        price: 1100,
        priceDesciption:"/year",
        image: "/assets/images/gym4.jpeg",
        description: "Get personalized coaching and support to reach your weight loss goals"
      }
    ]
  }
} 
