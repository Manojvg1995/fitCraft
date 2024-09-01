import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EatHealthyPageRoutingModule } from './eat-healthy-routing.module';

import { EatHealthyPage } from './eat-healthy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EatHealthyPageRoutingModule
  ],
  declarations: [EatHealthyPage]
})
export class EatHealthyPageModule {}
