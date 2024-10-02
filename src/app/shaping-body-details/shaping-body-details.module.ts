import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShapingBodyDetailsPageRoutingModule } from './shaping-body-details-routing.module';

import { ShapingBodyDetailsPage } from './shaping-body-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShapingBodyDetailsPageRoutingModule
  ],
  declarations: [ShapingBodyDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShapingBodyDetailsPageModule {}
 