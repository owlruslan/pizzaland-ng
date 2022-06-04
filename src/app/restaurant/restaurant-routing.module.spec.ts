import {TestBed} from "@angular/core/testing";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {RestaurantComponent} from "./restaurant.component";
import {RestaurantRoutingModule} from "./restaurant-routing.module";


describe('RestaurantRoutingModule', () => {
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({imports: [RestaurantRoutingModule, RouterTestingModule]});
    router = TestBed.inject(Router);
  });

  it('should load page', async () => {
    expect(router.config.find(rc => rc.path === '')?.component).toEqual(RestaurantComponent)
  });
})
