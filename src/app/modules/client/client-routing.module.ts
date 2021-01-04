import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'restaurants',
        loadChildren: () => import('./restaurants/restaurants.module').then(mod => mod.RestaurantsModule),
      },
      {
        path: 'restaurants/:id',
        loadChildren: () => import('./restaurant/restaurant.module').then(mod => mod.RestaurantModule),
      },
      {
        path: 'basket',
        loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
      },
      {
        path: '',
        redirectTo: 'restaurants',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
