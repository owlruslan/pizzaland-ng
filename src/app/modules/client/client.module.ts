import {NgModule} from '@angular/core';
import {ClientComponent} from './client.component';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';
import {RestaurantsMockService} from '../../services/restaurants/restaurants-mock.service';
import {NavbarModule} from './shared/navbar/navbar.module';
import {ClientRoutingModule} from './client-routing.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    ClientRoutingModule,
    NavbarModule,
  ],
  providers: [
    { provide: RestaurantsService, useClass: RestaurantsMockService },
  ],
})
export class ClientModule { }
