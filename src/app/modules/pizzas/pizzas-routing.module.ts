import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PizzasComponent} from '@app/modules/pizzas/pizzas.component';


const routes: Routes = [
  {
    path: '',
    component: PizzasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule {
}
