import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthTrackingPageRoutingModule } from './health-tracking-routing.module';

import { HealthTrackingPage } from './health-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthTrackingPageRoutingModule
  ],
  declarations: [HealthTrackingPage]
})
export class HealthTrackingPageModule {}
