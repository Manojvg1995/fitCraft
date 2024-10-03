import { Component, EventEmitter, Output} from '@angular/core';
import { DataService } from '../service/data.service';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-product-selected',
  templateUrl: './product-selected.page.html',
  styleUrls: ['./product-selected.page.scss'],
})
export class ProductSelectedPage {
  
  constructor(private router: Router){

  }
  
  backToHome(){
    this.router.navigate(['/pages/home']);
  }

  navigateToAddToCart(){
    this.router.navigate(['/pages/product-cart']);
  }
}
