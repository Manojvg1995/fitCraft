import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'shaping-body-details',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'feeds',
    loadChildren: () => import('./feeds/feeds.module').then(m => m.FeedsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'product-selected',
    loadChildren: () => import('./product-selected/product-selected.module').then(m => m.ProductSelectedPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: 'product-page',
    loadChildren: () => import('./component/product-page/product-page.module').then(m => m.ProductPagePageModule)
  },
  {
    path: 'product-cart',
    loadChildren: () => import('./component/product-cart/product-cart.module').then(m => m.ProductCartPageModule)
  },
  {
    path: 'shaping-body-details',
    loadChildren: () => import('./shaping-body-details/shaping-body-details.module').then(m => m.ShapingBodyDetailsPageModule)
  },
  {
    path: 'eat-healthy',
    loadChildren: () => import('./eat-healthy/eat-healthy.module').then(m => m.EatHealthyPageModule)
  },
  {
    path: 'health-tracking',
    loadChildren: () => import('./health-tracking/health-tracking.module').then(m => m.HealthTrackingPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
