import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./modules/restaurants/restaurants.module').then(mod => mod.RestaurantsModule),
  },
  {
    path: 'restaurants/:id',
    loadChildren: () => import('./modules/restaurant/restaurant.module').then(mod => mod.RestaurantModule),
  },
  {
    path: 'basket',
    loadChildren: () => import('./modules/basket/basket.module').then(mod => mod.BasketModule),
  },
  {
    path: '',
    redirectTo: 'restaurants',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
