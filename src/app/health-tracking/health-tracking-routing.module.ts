import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthTrackingPage } from './health-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: HealthTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthTrackingPageRoutingModule { }
