import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from './product-card.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [ProductCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductCardModule { }