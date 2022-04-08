import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./pages/restaurants/restaurants.module').then(mod => mod.RestaurantsModule),
  },
  {
    path: 'restaurants/:id',
    loadChildren: () => import('./pages/restaurant/restaurant.module').then(mod => mod.RestaurantModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(mod => mod.CartModule),
  },
  {
    path: '',
    redirectTo: 'restaurants',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
