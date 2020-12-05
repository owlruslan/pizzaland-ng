import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { SearchBarModule } from '@app/modules/shared/search-bar/search-bar.module'
import { SearchService } from '@app/services/search/search.service'
import { SearchMockService } from '@app/services/search/search-mock.service'
import { NavbarModule } from '@app/modules/shared/navbar/navbar.module'


@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    SearchBarModule,
    NavbarModule,
  ],
  providers: [
    {provide: SearchService, useClass: SearchMockService}
  ]
})
export class RestaurantsModule { }
