import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShapingBodyDetailsPage } from './shaping-body-details.page';

const routes: Routes = [
  {
    path: '',
    component: ShapingBodyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShapingBodyDetailsPageRoutingModule { }
