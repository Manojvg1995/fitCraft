import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SearchbarModule } from '../component/searchbar/searchbar.module';
import { CategoryItemModule } from '../component/category-item/category-item.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchbarModule,
    CategoryItemModule
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
