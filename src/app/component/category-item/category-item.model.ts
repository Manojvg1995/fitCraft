import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [CategoryItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [CategoryItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CategoryItemModule { }