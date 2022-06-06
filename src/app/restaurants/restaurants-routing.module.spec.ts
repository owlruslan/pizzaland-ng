import {TestBed} from "@angular/core/testing";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {RestaurantsRoutingModule} from "./restaurants-routing.module";

import {RestaurantsComponent} from "./restaurants.component";


describe('RestaurantsRoutingModule', () => {
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({imports: [RestaurantsRoutingModule, RouterTestingModule]});
    router = TestBed.inject(Router);
  });

  it('should load page', async () => {
    expect(router.config.find(rc => rc.path === '')?.component).toEqual(RestaurantsComponent)
  });
})
