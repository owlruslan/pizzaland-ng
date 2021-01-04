import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {NavbarModule} from './shared/navbar/navbar.module';
import {RestaurantCardModule} from '../client/shared/restaurant-card/restaurant-card.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavbarModule,
    RestaurantCardModule,
  ]
})
export class DashboardModule { }
