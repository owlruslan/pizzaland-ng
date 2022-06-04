import {TestBed} from "@angular/core/testing";
import {Route, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {AppRoutingModule} from "./app-routing.module";
import {CartModule} from "./pages/cart/cart.module";
import {RestaurantModule} from "./pages/restaurant/restaurant.module";
import {RestaurantsModule} from "./restaurants/restaurants.module";


export const expectLazyLoadModule = async (route: Route | undefined, module: unknown): Promise<any> => {
  if (typeof route?.loadChildren === 'function') {
    expect(await route.loadChildren()).toEqual(module)
  }
}

describe('AppRoutingModule', () => {
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({imports: [AppRoutingModule, RouterTestingModule]});
    router = TestBed.inject(Router);
  });

  it('should load restaurants', async () => {
    await expectLazyLoadModule(router.config.find(rc => rc.path === 'restaurants'), RestaurantsModule);
  });

  it('should load restaurant', async () => {
    await expectLazyLoadModule(router.config.find(rc => rc.path === 'restaurant/:id'), RestaurantModule);
  });

  it('should load cart', async () => {
    await expectLazyLoadModule(router.config.find(rc => rc.path === 'cart'), CartModule);
  });

  it('should load restaurants on first load', async () => {
    const route: Route | undefined = router.config.find(rc => rc.path === '');
    expect(route?.redirectTo).toBe('restaurants')
  });
})
