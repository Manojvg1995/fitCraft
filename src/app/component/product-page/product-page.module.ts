import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPagePageRoutingModule } from './product-page-routing.module';

import { ProductPagePage } from './product-page.page';
import { ProductCardModule } from "../product-card/product-card.model";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPagePageRoutingModule,
    ProductCardModule
  ],
  declarations: [ProductPagePage]
})
export class ProductPagePageModule { }
