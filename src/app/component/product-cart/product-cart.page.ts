import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.page.html',
  styleUrls: ['./product-cart.page.scss'],
})
export class ProductCartPage {
  quantities = { 1: 1,2:1 }; // Default quantity for item 1 is set to 1
  availableQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  constructor(private alertController: AlertController,
    private router:Router
  ) {}

  async placeOrder(){
    const alert = await this.alertController.create({
      header: 'successful',
      subHeader: 'Order is Placed',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.closeAlert(); // Call another method here
          }
        }
      ],
    });

    await alert.present();
  }

  closeAlert(){
    this.router.navigate(['/pages/home']);
  }
}
