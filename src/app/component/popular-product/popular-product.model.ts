import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularProductComponent } from './popular-product.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [PopularProductComponent],
  imports: [CommonModule, IonicModule],
  exports: [PopularProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PopularProductModule { }