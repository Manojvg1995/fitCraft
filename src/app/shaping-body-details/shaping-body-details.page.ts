import { Component, OnInit , AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shaping-body-details',
  templateUrl: './shaping-body-details.page.html',
  styleUrls: ['./shaping-body-details.page.scss'],
})
export class ShapingBodyDetailsPage implements AfterViewInit  {

  swiper!: Swiper;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    const slideChange = () => {
      console.log(this.swiper.activeIndex);
    };

    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: slideChange,
        init: () => {
          console.log('Swiper initialized');
        },
      },
    });
  }

  nextSlide() {
    this.swiper.slideNext();
  }
  
  navigateToLoginPage(){
    console.log("navigateToLoginPage")
    this.router.navigate(['/login']);
  }

  login(){
    
  }
}
