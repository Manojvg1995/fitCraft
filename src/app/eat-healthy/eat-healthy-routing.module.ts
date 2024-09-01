import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EatHealthyPage } from './eat-healthy.page';

const routes: Routes = [
  {
    path: '',
    component: EatHealthyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EatHealthyPageRoutingModule { }
