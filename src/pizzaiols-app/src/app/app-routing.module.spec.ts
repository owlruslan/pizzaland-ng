import {TestBed} from "@angular/core/testing";
import {Route, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {AppRoutingModule} from "./app-routing.module";
import {CartModule} from "./pages/cart/cart.module";
import {RestaurantModule} from "./pages/restaurant/restaurant.module";
import {RestaurantsModule} from "./pages/restaurants/restaurants.module";


describe('AppRoutingModule', () => {
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule]
    });

    router = TestBed.inject(Router);
  });

  it('should load restaurants', async () => {
    const route: Route | undefined = router.config.find(rc => rc.path === 'restaurants');

    if (typeof route?.loadChildren === 'function') {
      expect(await route.loadChildren()).toEqual(RestaurantsModule)
    }
  });

  it('should load restaurant', async () => {
    const route: Route | undefined = router.config.find(rc => rc.path === 'restaurant/:id');

    if (typeof route?.loadChildren === 'function') {
      expect(await route.loadChildren()).toEqual(RestaurantModule)
    }
  });

  it('should load cart', async () => {
    const route: Route | undefined = router.config.find(rc => rc.path === 'cart');

    if (typeof route?.loadChildren === 'function') {
      expect(await route.loadChildren()).toEqual(CartModule)
    }
  });

  it('should load restaurants on first load', async () => {
    const route: Route | undefined = router.config.find(rc => rc.path === '');
    expect(route?.redirectTo).toBe('restaurants')
  });
})
