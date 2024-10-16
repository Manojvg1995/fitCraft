import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shaping-body-details',
  templateUrl: './shaping-body-details.page.html',
  styleUrls: ['./shaping-body-details.page.scss'],
})
export class ShapingBodyDetailsPage {
  currentIndex: number = 0;
  slides = [1, 2, 3]; // You can change this to an actual array of slide data if needed

  constructor(private router: Router) {}

  nextSlide() {
    console.log(this.currentIndex);
    if(this.currentIndex>1){
      this.navigateToLoginPage();
    }else if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.updateSliderPosition();
    }
  }

  previousSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSliderPosition();
    }
  }

  private updateSliderPosition() {
    const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
    if (sliderWrapper) {
      const offset = -this.currentIndex * 100; // Move left for each slide
      sliderWrapper.style.transform = `translateX(${offset}%)`;
    }
  }

  navigateToLoginPage() {
    console.log('Navigating to login page');
    this.router.navigate(['/login']);
  }
}
