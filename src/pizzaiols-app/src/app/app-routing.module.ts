import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'restaurants',
        loadChildren: () => import('./pages/restaurants/restaurants.module').then(mod => mod.RestaurantsModule),
      },
      {
        path: 'restaurants/:id',
        loadChildren: () => import('./pages/restaurant/restaurant.module').then(mod => mod.RestaurantModule),
      },
      {
        path: 'basket',
        loadChildren: () => import('./pages/basket/basket.module').then(mod => mod.BasketModule),
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
