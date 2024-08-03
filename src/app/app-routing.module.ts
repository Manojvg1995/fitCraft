import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: 'pages', 
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesPageModule) 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) 
  },
  { 
    path: 'store', 
    loadChildren: () => import('./store/store.module').then(m => m.StorePageModule) 
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
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
