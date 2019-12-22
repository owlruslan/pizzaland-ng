import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
      },
      {
        path: 'pizzas',
        loadChildren: () => import('./modules/pizzas/pizzas.module').then(mod => mod.PizzasModule)
      },
      {
        path: 'restaurants',
        loadChildren: () => import('./modules/restaurants/restaurants.module').then(mod => mod.RestaurantsModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('./modules/basket/basket.module').then(mod => mod.BasketModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then(mod => mod.AboutModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
