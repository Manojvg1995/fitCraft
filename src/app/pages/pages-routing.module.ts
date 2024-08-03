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
        path: 'store',
        loadChildren: () => import('../store/store-routing.module').then(m => m.StorePageRoutingModule)
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
