import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home-routing.module').then(m => m.HomePageRoutingModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile-routing.module').then(m => m.ProfilePageRoutingModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('../feeds/feeds-routing.module').then(m => m.FeedsPageRoutingModule)
      },
      {
        path: 'book-product',
        loadChildren: () => import('../product-selected/product-selected.module').then(m => m.ProductSelectedPageModule)
      },
      {
        path: 'product-cart',
        loadChildren: () => import('../component/product-cart/product-cart.module').then(m => m.ProductCartPageModule)
      },
      {
        path: 'product-listing',
        loadChildren: () => import('../component/product-page/product-page.module').then(m => m.ProductPagePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
