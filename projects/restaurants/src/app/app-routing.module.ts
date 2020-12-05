import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/restaurants/restaurants.module').then(mod => mod.RestaurantsModule)
      },
      {
        path: 'pizzas',
        loadChildren: () => import('./modules/pizzas/pizzas.module').then(mod => mod.PizzasModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('./modules/basket/basket.module').then(mod => mod.BasketModule)
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
